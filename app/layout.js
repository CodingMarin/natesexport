import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nates Export",
  description: "Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano.",
  keywords: "Exportación de productos orgánicos, Productos orgánicos a granel, Venta de productos orgánicos, Oregano orgánico ,Cúrcuma orgánica , Café orgánico, Hongo deshidratado orgánico, Aceitunas orgánicas, Proveedor de productos orgánicos, Alimentos orgánicos de calidad, Exportación de alimentos saludables, Suministro de ingredientes orgánicos, Ingredientes naturales para la industria alimentaria, Productos agrícolas orgánicos, Comercio internacional de alimentos orgánicos",
  robots: "index, follow",
  author: "Nates Export",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
        />
        <link
          rel="canonical"
          href="https://natesexport.com/shop"
          key="canonical"
        />
      </head>
      <body className={inter.className} style={{ background: "#fff" }}>
        <div className="absolute z-[-1] h-screen object-contain w-full opacity-75" style={{ backgroundImage: "linear-gradient(to right bottom, #000000, transparent, transparent, transparent, transparent)" }}></div>
        {children}
      </body>
    </html>
  )
}
