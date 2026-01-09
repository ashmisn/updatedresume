import './globals.css';
import type { Metadata } from 'next';
import { Inter, Indie_Flower, Poppins } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie-flower'
});
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

// export const metadata: Metadata = {
//   title: 'Ashmi S N - Full-Stack Developer & AI Engineer',
//   description: 'Portfolio of Ashmi S N - Building beautiful interfaces, engineering scalable backends, and training intelligent AI systems.',
//   openGraph: {
//     images: [
//       {
//         url: 'C:\Users\ashmi\Downloads\project-bolt-sb1-dhjayvay (2)\project\public\PP PICT.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Ashmi S N Portfolio',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     images: [
//       {
//         url: 'https://bolt.new/static/og_default.png',
//       },
//     ],
//   },
// };
export const metadata: Metadata = {
  title: 'Ashmi S N - Full-Stack Developer & AI Engineer',
  description:
    'Portfolio of Ashmi S N - Building beautiful interfaces, engineering scalable backends, and training intelligent AI systems.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Ashmi S N Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${indieFlower.variable} ${poppins.variable} font-poppins`}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <main className="min-h-screen px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
