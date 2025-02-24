import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
