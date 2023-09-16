import "../globals.css"
import { useLocale } from "next-intl"
import { notFound } from "next/navigation"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "natesexport.com",
    template: "%s | natesexport.com",
  },
  description: "Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.",
  openGraph: {
    title: "natesexport.com",
    description:
      "Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.",
    url: "https://natesexport.com",
    siteName: "natesexport.com",
    images: [
      {
        url: "https://natesexport.com/bg.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  keywords: "Exportación de productos orgánicos, Productos orgánicos a granel, Venta de productos orgánicos, Oregano orgánico ,Cúrcuma orgánica , Café orgánico, Hongo deshidratado orgánico, Aceitunas orgánicas, Proveedor de productos orgánicos, Alimentos orgánicos de calidad, Exportación de alimentos saludables, Suministro de ingredientes orgánicos, Ingredientes naturales para la industria alimentaria, Productos agrícolas orgánicos, Comercio internacional de alimentos orgánicos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nates Export",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
  author: "Nates Export",
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
