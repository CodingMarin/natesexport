'use client'

import Image from 'next/image'
import Navigation from '@/components/navigation'
import Cardquality from '@/components/cardquality'
import Slider from '@/components/slider'
import Footer from '@/components/footer'
import Preloader from '@/components/preloader'
import { useRouter } from 'next/navigation'
import { lazy, useState } from 'react'
import { Toaster, toast } from 'sonner'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [surname, setSurname] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4MDA0MjQ1NSwianRpIjoiMTg1Y2M0ZTgtOWE3Ni00MjRjLWJhMTctMDJiMDZiMGJmOGE4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjgwMDQyNDU1fQ.QOzUAhskqdb_S120ACPR6Yeob8-GQyRpiNzv_Rfv718'

    try {
      const response = await fetch('https://gruwin.pythonanywhere.com/email', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          name_client: name + ' ' + surname,
          email_client: "logistica@natesexport.com",
          phone_client: phone,
          email_address: email,
          message_subject: "Correo Nuevo",
          message_send: message
        })
      })

      setName("")
      setPhone("")
      setEmail("")
      setSurname("")
      setMessage("")

      if (response.status === 200) {
        toast.success("Datos enviados 🥳")
      } else {
        toast.error("¡Ups!, algo salio mal. 😢")
      }

    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <main className="">
      <Toaster richColors position="top-center" />
      <video poster="/bg.png" className="absolute z-[-2] h-screen object-cover" autoPlay loop muted>
        <source src="/bg.mp4" type="video/mp4"></source>
        <source src="/bg.webm" type="video/webm"></source>
      </video>
      <Navigation></Navigation>
      <div className="px-6 lg:px-8 md:pt-12 pt-0">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
          <div className="text-center">
            <h1 className="select-none text-6xl leading-snug font-bold tracking-normal text-slate-100 sm:text-7xl sm:leading-none font-nature my-4 drop-shadow-2xl">Productos Orgánicos</h1>
            <p className="select-none mt-6 text-sm text-slate-100 lg:font-normal font-medium lg:px-0 px-4" style={{ textShadow: '1px 1px rgba(0,0,0,0.3)' }}>Somos una empresa dedicada a la distribución de productos agrícolas a nivel nacional e internacional, especializada en hongos deshidratados, aceitunas, cúrcuma, café y orégano. Nuestra pasión por la agricultura sostenible y de alta calidad nos ha llevado a establecer sólidas relaciones con productores y agricultores de confianza en todo el mundo. Contamos con asociación de la Cámara de Comercio de Lima.</p>
            <div className="mt-10">
              <button onClick={() => router.push('/shop')} class="transition duration-300 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-300 rounded-lg group bg-gradient-to-br from-green-400 to-[#00968A] group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:outline-none">
                <span class="select-none relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                  Comprar ahora
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 lg:px-8 sm:pt-0 xl:pt-14 w-full relative curved-demo">
        <div className="flex-col mx-auto max-w-sm py-10">
          <div className="flex justify-center ">
            <div className="w-60 h-auto">
              <Image
                src="/calidad_natural.png"
                alt="calidad natural"
                quality={100}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="text-center px-10">
            <p className="text-sm text-[#091E42] font-medium lg:px-0 px-4">Nuestro compromiso con la calidad es uno de los valores fundamentales de nuestra empresa, y es por eso que trabajamos de manera constante para mantener altos estándares de producción y exportación en todos nuestros productos.</p>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-8 bg-white">
        <Slider />
      </div>
      <div className="bg-[#F7F8F9] pt-20">
        <div className="flex-col mx-auto max-w-sm py-10">
          <div className="flex justify-center ">
            <div className="w-60 h-auto">
              <Image
                src="/calidad_natural.png"
                alt="Picture of the author"
                quality={100}
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="text-center px-10">
            <p className="text-sm text-gray-700">Nuestro compromiso con la calidad es uno de los valores fundamentales de nuestra empresa, y es por eso que trabajamos de manera constante para mantener altos estándares de producción y exportación en todos nuestros productos.</p>
          </div>
        </div>
        <div className="pt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl sm:mx-auto mx-auto w-full justify-center gap-y-3 gap-x-10">
          <Cardquality
            url={'/value_work.png'}
            title={'VALORAMOS EL TRABAJO DE CAMPO'}
            description={'En cada etapa de producción, valoramos el trabajo de campo realizado por agricultores locales. Nos enorgullece apoyar y reconocer su arduo trabajo, asegurándonos de que reciban un trato justo y digno. Al valorar y fomentar la calidad en el trabajo de campo, podemos ofrecer especias y condimentos de excelencia, cultivados con pasión y dedicación. Descubre la historia detrás de nuestros productos y el impacto positivo que generamos en las comunidades agrícolas.'}
          />
          <Cardquality
            url={'/export_safety.png'}
            title={'EXPORTACIÓN SEGURA'}
            description={'En nuestra, nuestro compromiso es llevar los sabores auténticos de Perú al mundo, garantizando que cada especia y condimento cumpla con los estándares internacionales de calidad.'}
          />
          <Cardquality
            url={'/materia_prima.png'}
            title={'OFRECEMOS CALIDAD'}
            description={'En nuestra búsqueda constante por ofrecer productos superiores, realizamos rigurosas inspecciones de la materia prima que utilizamos. Trabajamos en estrecha colaboración con agricultores y proveedores de confianza para asegurar que nuestras especias y condimentos sean cultivados de manera sostenible y siguiendo prácticas agrícolas responsables. Nuestra inspección minuciosa garantiza la pureza y frescura de nuestros productos.'}
          />
        </div>
        <div className="mx-auto max-w-2xl top-0 inset-0">
          <div className="w-auto h-auto">
            <Image
              src="/camp_cosechando.png"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(73,157,145,0.4)] bg-no-repeat h-full object-fill" style={{ backgroundImage: "url('/camp_cos.webp')" }}>
        <div className="py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl sm:mx-auto mx-auto w-full justify-center items-center">
          <p className="font-poppinsbold lg:text-4xl text-3xl italic text-center  text-white">ESPECIAS Y <br></br> CONDIMENTOS</p>
          <div className="lg:w-96 w-72 h-auto mx-auto">
            <Image
              title="Especias y condimentos"
              src="/especias_condimentos_.webp"
              alt="picture"
              quality={100}
              width={500}
              height={500}
              priority
              loading="lazy"
            />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-5xl italic font-bold text-center text-white">100%</h1>
            <p className="font-poppinsbold text-4xl italic text-center  text-white"> ORGÁNICOS</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(73,157,145,0.4)] bg-no-repeat object-fill max-h-80 h-full py-20" style={{ backgroundImage: "url('/camp_cos_lima.webp')" }}>
        <div className="py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl sm:mx-auto mx-auto w-full justify-center items-center">
          <p className="font-poppinsbold lg:text-4xl text-3xl text-center text-white">Aliados</p>
          <div className="justify-around hidden lg:flex">
            <div className="w-1 h-20 bg-white"></div>
          </div>
          <div className="lg:w-96 w-72 h-auto mx-auto">
            <Image
              className="drop-shadow-lg"
              src="/CCL_Asociado_edited.webp"
              title="CCL LOGO"
              alt="Logo"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12 px-6">
        <div className="lg:w-96 w-60 h-auto mx-auto">
          <h1 className="px-4 text-[#091E42] text-2xl font-semibold text-center py-10">Contáctanos</h1>
          <Image
            className="drop-shadow-lg"
            src="/map_peru_min.png"
            alt="Picture of the author"
            quality={100}
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-full mx-auto py-5">
          <form onSubmit={handleSubmit}>

            <div className="py-4">
              <label for="telefono" className="text-sm text-[#091E42] font-medium">Telefono / Correo</label>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center">
                <input required type="tel" id="telefono" aria-describedby="helper-text-explanation" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Telefono" autoComplete="off" />
                <input required type="email" id="email" aria-describedby="helper-text-explanation" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="example@gmail.com" autoComplete="off" />
              </div>
            </div>

            <label for="name" className="pb-4 text-sm text-[#091E42] font-medium">Nombres / Apellidos</label>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center">
              <input required type="text" id="name" aria-describedby="helper-text-explanation" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Nombres" autoComplete="off" />
              <input required type="text" id="surname" aria-describedby="helper-text-explanation" value={surname} onChange={(e) => setSurname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Apellidos" autoComplete="off" />
            </div>

            <div className="py-5">
              <label for="message" className="block mb-2 text-sm font-medium text-[#091E42] ">Escribe tu solicitud aqui... *</label>
              <textarea required id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-[#091E42] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu solicitud aquí..."></textarea>
            </div>

            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">Nunca compartiremos sus datos. Lea nuestro <a href="#" class="font-medium text-blue-600 hover:underline">Política de privacidad</a>.</p>
            <div className="mt-10">
              <button class="lg:w-auto w-full transition duration-300  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-300 rounded-lg group bg-gradient-to-br from-green-400 to-[#00968A] group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:outline-none">
                <span class="select-none relative px-10 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 lg:w-full">
                  Enviar
                </span>
              </button>
            </div>
          </form>

        </div>
      </div>
      <Footer />
      <Preloader />
    </main>
  )
}
