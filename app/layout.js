import Gtm from '@/components/gtm'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nates Export',
  description: 'Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.',
  keywords: 'agricultura, productos agrícolas, hongos, aceitunas, cúrcuma, café, orégano',
  canonical: 'https://natesexport.vercel.app/',
  robots: "index, follow",
  author: "Nates Export",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className} style={{ background: '#fff' }}>
        <div className="absolute z-[-1] h-screen object-contain w-full opacity-75" style={{ backgroundImage: 'linear-gradient(to right bottom, #000000, transparent, transparent, transparent, transparent)' }}></div>
        <Gtm />
        {children}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T67CT6C8" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
      </body>
    </html>
  )
}
