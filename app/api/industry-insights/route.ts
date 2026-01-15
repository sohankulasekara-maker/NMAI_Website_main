import { NextRequest, NextResponse } from 'next/server'

// Primary key from env, plus fallback keys for rate limit handling
const API_KEYS = [
  process.env.GEMINI_API_KEY,
  'AIzaSyD3ZZxQU6kC2dL0Lm6M4_T2l-q6MBJdB74',
  'AIzaSyAXXh5ivCAWsNzWJuqRvqNxV9oPdMFJzNA',
  'AIzaSyC8MLQMOtf3zwJ-fTuJHYTcn9V9pIwQOvg',
  'AIzaSyB79S9Xb9rTUoctwFoWrG7Uw6GIcALGm9Q',
].filter(Boolean) as string[]

async function callGeminiAPI(prompt: string, apiKey: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
          responseMimeType: "application/json",
        },
      }),
    }
  )

  return response
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { industry } = body

    if (!industry) {
      return NextResponse.json(
        { error: 'Industry is required' },
        { status: 400 }
      )
    }

    if (API_KEYS.length === 0) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const prompt = `You are an AI consultant for a company called NeuroMonkey.AI. A potential client from the "${industry}" industry wants to understand how AI can help their business.

Provide a response in the following JSON format (return ONLY valid JSON, no markdown):
{
  "headline": "A bold, attention-grabbing statistic or statement about AI in this industry (1 sentence)",
  "headlineSource": {
    "text": "Source name (e.g., McKinsey, Gartner, Harvard Business Review)",
    "url": "A real, verifiable URL to the source"
  },
  "insights": [
    {
      "title": "Brief title of the AI application",
      "description": "How AI specifically helps in this area (1-2 sentences)"
    }
  ],
  "callToAction": "A compelling reason why they should act now (1 sentence)"
}

Requirements:
- The headline must include a specific percentage or number
- Provide exactly 3 insights relevant to the ${industry} industry
- Use real, verifiable sources with actual URLs
- Make it compelling and specific to their industry
- Focus on ROI, efficiency gains, or competitive advantages`

    // Try each API key until one succeeds
    let lastError = null
    for (const apiKey of API_KEYS) {
      try {
        const response = await callGeminiAPI(prompt, apiKey)

        // If rate limited, try next key
        if (response.status === 429) {
          console.log('Rate limited, trying next API key...')
          continue
        }

        if (!response.ok) {
          const errorData = await response.text()
          console.error('Gemini API error:', errorData)
          lastError = 'Failed to generate insights'
          continue
        }

        const data = await response.json()

        // Extract the text content from Gemini's response
        const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text

        if (!textContent) {
          lastError = 'No content generated'
          continue
        }

        // Parse the JSON from the response
        let parsedContent
        try {
          // Clean any potential markdown formatting and parse
          const cleanedContent = textContent
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim()
          parsedContent = JSON.parse(cleanedContent)

          // Validate required fields exist
          if (!parsedContent.headline || !parsedContent.insights) {
            throw new Error('Missing required fields')
          }
        } catch (parseError) {
          console.error('Failed to parse Gemini response:', textContent.substring(0, 500))
          lastError = 'Failed to parse AI response'
          continue
        }

        // Success! Return the result
        return NextResponse.json({
          success: true,
          industry,
          data: parsedContent,
        })

      } catch (err) {
        console.error('Error with API key:', err)
        lastError = 'Request failed'
        continue
      }
    }

    // All keys exhausted
    return NextResponse.json(
      { error: lastError || "We're experiencing high demand, please try again in a moment" },
      { status: 429 }
    )

  } catch (error) {
    console.error('Error generating industry insights:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
