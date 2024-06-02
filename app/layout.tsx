import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserratGoogle = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '300'
})

export const metadata: Metadata = {
  title: 'KI App',
  description: 'Created by Korrado Inganamorte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='phone-sm:text-[46.25%] verticalphone:text-[47%] horizontalphone:text-[48.5%] tablet:text-[50%] laptop-sm:text-[56.25%] laptop:text-[62.5%] monitor:text-[70.5%] screen:text-[87.5%]'>
      <body className={montserratGoogle.className}>{children}</body>
    </html>
  )
}
