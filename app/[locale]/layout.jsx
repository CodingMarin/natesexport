import "../globals.css"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return [
    {locale: 'es'},
    {locale: 'en'}
  ]
}

export const metadata = {
  title: {
    default: "Nates Export",
    template: "%s | natesexport.com",
  },
  description: "Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.",
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Nates Export",
    description:
      "Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.",
    url: "https://natesexport.com/",
    siteName: "Nates Export",
    images: [
      {
        url: "https://natesexport.com/bg.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "es",
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
  generator: "Next.js",
  creator: "Alexander Marin",
  publisher: "Alexander Marin",
  metadataBase: new URL('https://natesexport.com'),
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages

  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={inter.className}>
      <body className={inter.className} style={{ background: "#fff" }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="absolute z-[-1] h-screen object-contain w-full opacity-75 bg-gradient-nolinear" />
        {children}
        </NextIntlClientProvider>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1618551591765757" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
