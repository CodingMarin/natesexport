import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nates Export',
  description: 'Somos una empresa encargada de distribuir productos agricolas a nivel nacional e internacional.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#fff' }}>
        <div className="absolute z-[-1] h-screen object-contain w-full opacity-75" style={{ backgroundImage: 'linear-gradient(to right bottom, #000000, transparent, transparent, transparent, transparent)' }}></div>
        {children}
      </body>
    </html>
  )
}
