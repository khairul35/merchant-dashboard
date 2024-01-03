'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header';
import { NotificationProvider } from './components/notification/NotificationContext';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Merchant apps',
  description: 'Merchant web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen'>
          <Header />
            <NotificationProvider>
              {children}
            </NotificationProvider>
        </div>
      </body>
    </html>
  )
}