'use client'

import Image from 'next/image'
import Navigation from '@/components/navigation'
import Cardquality from '@/components/cardquality'
import profilePic from '../public/prod_org.png'
import Slider from '@/components/slider'
import Footer from '@/components/footer'
import Preloader from '@/components/preloader'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

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
        <div className="flex-col mx-auto max-w-sm">
          <div className="flex justify-center ">
            <div className="w-52 h-auto">
              <Image
                src={profilePic}
                alt="Picture of the author"
                quality={100}
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700">Conoce nuestras especias e insumos que puedes encontrar con nosotros</p>
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
      <Footer />
      <Preloader />
    </main>
  )
}
