import Navigation from '@/components/navigation/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './AuthProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fluffy Robot',
  description: 'Resume app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en" data-theme="light">
        <body className={inter.className} suppressHydrationWarning={true}>
          <Navigation /> {/* remove navigation from print mode */}
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
