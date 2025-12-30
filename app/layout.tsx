import '@/css/tailwind.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProviders from '@/components/ThemeProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WNB Knowledge Center',
  description: 'WhyNotBroker Guide',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning added to body to prevent Grammarly/Extension crashes */}
      <body 
        className={`${inter.className} bg-white text-black antialiased dark:bg-gray-950 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProviders>
          <div className="flex h-screen flex-col justify-between font-sans">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}
