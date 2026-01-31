import './globals.css';

export const metadata = {
  title: 'Nexora Studio',
  description: 'Professional Portfolio Studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
