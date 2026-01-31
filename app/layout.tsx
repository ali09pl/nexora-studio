import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Nexora Studio',
  description: 'Professional studio portfolio built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
