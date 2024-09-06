import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Next.js 14",
  description: "lorem ipsum dolar amet",
  icons: {
    icon: '/assets/images/site-logo.svg '
  }
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <h1 className='h1-bold'>This is a piece</h1>
        <body className={`${inter.variable} ${spaceGrotesk.variable} `}>
          {/* <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}