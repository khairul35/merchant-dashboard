'use client';

import Link from 'next/link';
import { NotificationProvider } from './components/notification/NotificationContext';

export default function Home() {
  if (window.localStorage.getItem('isLogin') == 'true') {
      window.location.href = '/dashboard';
  }
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-bg-color">
        <NotificationProvider>
          <div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-64 h-64"
                src="/assets/ho-tak-logo.png"
                alt="Ho Tak Technology"
              />
            </div>
            <h1 className="text-5xl text-center items-center">Merchant App Dashboard</h1>
            <div className="items-center flex justify-center h-full pt-4 mt-10">
              <Link href="/login">
                <button className="btn btn-primary w-full max-w-xs pl-5 pr-5">Login &rarr;</button>
              </Link>
            </div>
          </div>
        </NotificationProvider>
      </main>
  )
}
