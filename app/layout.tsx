import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'USF CONNECT 2.0 - Innovation & Economic Development',
  description: 'AI-Powered Platform for University of South Florida\'s Innovation and Economic Development initiatives',
  keywords: 'USF, CONNECT, innovation, economic development, AI, portfolio management, university of south florida',
  authors: [{ name: 'USF CONNECT' }],
  creator: 'University of South Florida',
  publisher: 'USF CONNECT',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#006747',
  openGraph: {
    title: 'USF CONNECT 2.0 - Innovation & Economic Development',
    description: 'AI-Powered Platform for University of South Florida\'s Innovation and Economic Development initiatives',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USF CONNECT 2.0',
    description: 'AI-Powered Innovation & Economic Development Platform',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#006747" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}