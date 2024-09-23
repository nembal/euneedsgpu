// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope, Inter } from 'next/font/google' // Import Inter font
import { cn } from '@/lib/utils'
import './globals.css'
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '600', // Use Inter 600 for bold/title sections
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400', // Use Inter 400 for body texts
  variable: '--font-body',
})

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}