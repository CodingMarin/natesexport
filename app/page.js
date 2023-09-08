'use client'

import Image from 'next/image'
import Navigation from '@/components/navigation'
import Cardquality from '@/components/cardquality'
import Slider from '@/components/slider'
import Footer from '@/components/footer'
import Preloader from '@/components/preloader'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [asunto, setAsunto] = useState("")
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

      const data = await response.json()
      console.log('Response:', data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <main className="">
      <video poster="/bg.png" className="absolute z-[-2] h-screen object-cover" autoPlay loop muted>
        <source src="/bg.mp4" type="video/mp4"></source>
        <source src="/bg.webm" type="video/webm"></source>
      </video>
      <Navigation></Navigation>
      <div className="px-6 lg:px-8 md:pt-12 pt-0">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
          <div className="text-center">
            <h1 className="select-none text-6xl leading-snug font-bold tracking-normal text-slate-100 sm:text-7xl sm:leading-none font-nature my-4 drop-shadow-2xl">Productos Organicos</h1>
            <p className="select-none mt-6 text-sm text-slate-100 lg:font-normal font-medium lg:px-0 px-4" style={{ textShadow: '1px 1px rgba(0,0,0,0.3)' }}>Somos los exportadores mas grandes a nivel nacional, con productos de alta calidad y diversidad peruana. contamos con asociacion de la camara de comercio limeña.</p>
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
      <div className="px-6 py-10 lg:px-8 sm:pt-0 xl:pt-14 w-full relative curved-demo">
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
            description={'At each stage of production, we value the field work carried out by local farmers. We are proud to support and recognize their hard work, making sure they are treated fairly and with dignity. By valuing and promoting quality in field work, we can offer spices and condiments of excellence, cultivated with passion and dedication. Discover the story behind our products and the positive impact we make in farming communities.'}
          />
          <Cardquality
            url={'/export_safety.png'}
            title={'EXPORTACION SEGURA'}
            description={'At our, our commitment is to bring the authentic flavors of Peru to the world, ensuring that each spice and seasoning meets international quality standards.'}
          />
          <Cardquality
            url={'/materia_prima.png'}
            title={'OFRECEMOS CALIDAD'}
            description={'In our constant quest to offer superior products, we carry out rigorous inspections of the raw materials we use. We work closely with trusted farmers and suppliers to ensure our spices and seasonings are sustainably grown and following responsible farming practices. Our thorough inspection guarantees the purity and freshness of our products.'}
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
      <div className="bg-[rgba(73,157,145,0.4)] bg-no-repeat h-full object-fill" style={{ backgroundImage: "url('/camp_cos.png')" }}>
        <div className="py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl sm:mx-auto mx-auto w-full justify-center items-center">
          <p className="font-poppinsbold lg:text-4xl text-3xl italic text-center  text-white">ESPECIAS Y <br></br> CONDIMENTOS</p>
          <div className="lg:w-96 w-72 h-auto mx-auto">
            <Image
              src="/especias_condimentos_.png"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-5xl italic font-bold text-center text-white">100%</h1>
            <p className="font-poppinsbold text-4xl italic text-center  text-white"> ORGANICO</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(73,157,145,0.4)] bg-no-repeat object-fill max-h-80 h-full py-20" style={{ backgroundImage: "url('/camp_cos_lima.png')" }}>
        <div className="py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl sm:mx-auto mx-auto w-full justify-center items-center">
          <p className="font-poppinsbold lg:text-4xl text-3xl text-center text-white">Aliados</p>
          <div className="justify-around hidden lg:flex">
            <div className="w-1 h-20 bg-white"></div>
          </div>
          <div className="lg:w-96 w-72 h-auto mx-auto">
            <Image
              className="drop-shadow-lg"
              src="/CCL_Asociado_edited.png"
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
                <input type="tel" id="telefono" aria-describedby="helper-text-explanation" onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Telefono" autoComplete="off" />
                <input type="email" id="email" aria-describedby="helper-text-explanation" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="example@gmail.com" autoComplete="off" />
              </div>
            </div>

            <label for="name" className="pb-4 text-sm text-[#091E42] font-medium">Nombres / Apellidos</label>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center">
              <input type="text" id="name" aria-describedby="helper-text-explanation" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Nombres" autoComplete="off" />
              <input type="text" id="surname" aria-describedby="helper-text-explanation" onChange={(e) => setSurname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Apellidos" autoComplete="off" />
            </div>

            <div className="py-5">
              <label for="message" className="block mb-2 text-sm font-medium text-[#091E42] ">Escribe tu solicitud aqui... *</label>
              <textarea id="message" rows="4" onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-[#091E42] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>

            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
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
