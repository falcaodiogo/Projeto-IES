import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "react-material-symbols/dist/rounded.css"
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans", })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}> <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          > {children}</ThemeProvider></body>
    </html>
  )
}
