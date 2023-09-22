import "../globals.css"
import { useLocale } from "next-intl"
import { notFound } from "next/navigation"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title:"Nates Export",
  description: "Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.",
  
}

export default function LocaleLayout({ children, params }) {
  const locale = useLocale()
  console.log('languages:', params.locale)

  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} className={inter.className}>
      <body className={inter.className} style={{ background: "#fff" }}>
        <div className="absolute z-[-1] h-screen object-contain w-full opacity-75 bg-gradient-nolinear" />
        {children}
      </body>
    </html>
  )
}
