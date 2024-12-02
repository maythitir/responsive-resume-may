import './globals.css';
import type { Metadata } from 'next';
import { Mali } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const mali = Mali({ 
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'My Cute Resume',
  description: 'Personal resume website with a cute design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mali.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}