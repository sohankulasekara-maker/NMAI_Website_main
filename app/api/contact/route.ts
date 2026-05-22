import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }
    const resend = new Resend(apiKey)

    const body = await request.json()
    const { name, email, companyName, countryCode, phone, serviceInterest, message } = body

    // Validate required fields
    if (!name || !email || !phone || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format service interest for display
    const serviceLabels: Record<string, string> = {
      'ai-solutions': 'AI Solutions',
      'digital-solutions': 'Digital Solutions',
      'consultation': 'Consultation',
      'other': 'Other'
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'contact@neuromonkey.ai',
      to: ['neuromonky.ai@gmail.com'],
      subject: `New Contact Form: ${serviceLabels[serviceInterest] || serviceInterest} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Contact Form Submission</h2>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
            <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
          </div>

          <div style="background-color: #ede9fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Service Interest</h3>
            <p style="font-size: 16px; color: #7c3aed; font-weight: bold;">${serviceLabels[serviceInterest] || serviceInterest}</p>
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Message / Requirements</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}