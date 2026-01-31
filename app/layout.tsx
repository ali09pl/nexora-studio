import './globals.css';
import { ReactNode } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';

export const metadata = {
  title: "Nexora Studio - Creative Portfolio",
  description: "Nexora Studio: Professional web and UX solutions",
  openGraph: {
    title: "Nexora Studio",
    description: "Professional web & UX solutions",
    url: "https://nexora-studio.vercel.app",
    siteName: "Nexora Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexora Studio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <body className="min-h-screen flex flex-col">
        <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold">Nexora Studio</h1>
          <DarkModeToggle />
        </header>
        <main className="flex-1">{children}</main>
        <footer className="p-4 text-center text-sm border-t border-gray-200 dark:border-gray-700">
          © {new Date().getFullYear()} Nexora Studio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
