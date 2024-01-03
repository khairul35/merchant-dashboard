import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import { NotificationProvider } from './components/notification/NotificationContext.client';
import './globals.css';

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
        <NotificationProvider>
          <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <div
              className="flex flex-1 overflow-y-auto"
              style={{
                maxHeight: 'calc(100vh - 77px)',
              }}>
              <Navigation />
              <main className="flex-1 p-4"
              style={{
                maxHeight: 'calc(100vh - 77px)',
              }}>{children}</main>
            </div>
          </div>
        </NotificationProvider>
      </body>
    </html>
  )
}