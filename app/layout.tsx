import './globals.css'
// Removed unused import 'Manrope'

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
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