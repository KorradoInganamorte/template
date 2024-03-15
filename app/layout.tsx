import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { montserratRegular } from '@/public/fonts'

import './globals.sass'

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
    <html lang="en" className='leading-normal'>
      <body className={`${montserratRegular} ${montserratGoogle.variable}`}>{children}</body>
    </html>
  )
}
