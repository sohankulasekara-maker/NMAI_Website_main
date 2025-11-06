import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuro Monkey',
  description: 'Neural AI development made effortless',
  generator: 'Neuro Monkey',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        {/* Livara ChatBot Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://gar-inviting-shiner.ngrok-free.app/widget/tw_10_6pc0PyCBWALChr8EqKrji3I_lFzjHp2hF80I5AVzmo8.js';
                script.async = true;
                script.onerror = function() {
                  console.error('Failed to load Livara ChatBot widget. Please check your API key.');
                };
                document.head.appendChild(script);
              })();
            `,
          }}
        />
        {/* End Livara ChatBot Widget */}
      </head>
      <body>{children}</body>
    </html>
  )
}
