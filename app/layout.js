import "../globals.css"
import { Inter } from "next/font/google"
import LocalFont from "next/font/local";

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
    shortcut: "/favicon.ico",
  },
  author: "Nates Export",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const calSans = LocalFont({
  src: "..public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={[inter.variable, calSans.variable].join("")}>
      <body
        className={inter.className} style={{ background: "#fff" }}>
        <div
          className="absolute z-[-1] h-screen object-contain w-full opacity-75 bg-gradient-nolinear" />
        {children}
      </body>
    </html>
  )
}
