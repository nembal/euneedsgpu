import './globals.css'
// Removed unused import 'Manrope'

export const metadata = {
  title: 'EU GPUs for AI',
  description: 'EU needs more GPUs for AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}