import 'css/tailwind.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProviders from '@/components/ThemeProviders'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// ---- STUBS (pliny removed safely) ----
type AnalyticsConfig = unknown
type SearchConfig = unknown

function Analytics(_: { analyticsConfig?: AnalyticsConfig }) {
  return null
}

function SearchProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
// -------------------------------------

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteMetadata.language} className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main>{children}</main>
              <Footer />
            </SearchProvider>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
