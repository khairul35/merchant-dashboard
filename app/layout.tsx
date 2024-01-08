
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
            {/* <Header /> */}
            <div
              className="flex flex-1"
              style={{
                maxHeight: 'calc(100vh - 77px)',
              }}>
              <span className="hidden sm:block">
                <Navigation />
              </span>
              <main className="flex-1 p-4 overflow-x-auto">
                <div
                  className="max-w-full"
                  style={{
                    maxHeight: 'calc(100vh - 77px)',
                    overflow: 'auto',
                    paddingBottom: '20px',
                    width: '100%',
                  }}
                >
                  {children}
                </div>
              </main>
            </div>
          </div>
        </NotificationProvider>
      </body>
    </html>
  )
}