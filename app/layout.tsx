import './globals.css'
// Removed unused import 'Manrope'

export const metadata = {
  title: 'EU needs GPU',
  description: 'EU needs GPUs for AI',
  keywords: 'AI, GPUs, Europe, Technology, Artificial Intelligence, GPU supply, EU tech initiatives',
  authors: [{ name: 'Balazs Nemethi' }],
  openGraph: {
    title: 'EU needs GPU',
    description: 'EU needs GPUs for AI',
    url: 'https://euneedsgpu.com',
    siteName: 'EU needs GPUs for AI',
    images: [
      {
        url: '/og_image.png', // Updated path
        width: 1200,
        height: 630,
        alt: 'EU GPU GPU',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU needs GPU',
    description: 'EU needs more GPUs for AI',
    images: ['/og_image.png'], // Updated path
    creator: '@bearmetalGPU',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags can be added here if necessary */}
      </head>
      <body>{children}</body>
    </html>
  )
}