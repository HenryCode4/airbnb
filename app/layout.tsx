import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AirBnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly >
          <Modal isOpen />
        </ClientOnly>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
