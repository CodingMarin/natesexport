'use client'

import { useTranslations } from "next-intl"
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Cardquality from '@/components/cardquality'
import Slider from '@/components/slider'
import Footer from '@/components/footer'
import Preloader from '@/components/preloader'
import SendEmail from '@/components/email'

export default function Home() {
  const translate = useTranslations("Home")

  return (
    <main className="">
      <video poster="/bg.png" className="absolute z-[-2] h-screen object-cover" autoPlay loop muted>
        <source src="/bg.mp4" type="video/mp4"></source>
        <source src="/bg.webm" type="video/webm"></source>
      </video>
      <Navigation />
      <div className="px-6 lg:px-8 md:pt-12 pt-0">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
          <div className="text-center">
            <h1 className="select-none text-6xl leading-snug font-bold tracking-normal text-slate-100 sm:text-7xl sm:leading-none font-nature my-4 drop-shadow-2xl">{translate('title')}</h1>
            <h2 className="mt-6 text-sm text-slate-100 lg:px-0 px-4" style={{ textShadow: '1px 1px rgba(0,0,0,0.3)' }}>{translate('description')}</h2>
            <div className="mt-10">
              <a href="/shop" className="transition duration-300 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-300 rounded-lg group bg-gradient-to-br from-green-400 to-[#00968A] group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:outline-none">
                <span className="select-none relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                  {translate('buy-now')}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 lg:px-8 sm:pt-0 xl:pt-14 w-full relative curved-demo">
        <div className="flex-col mx-auto max-w-sm py-10">
          <div className="flex justify-center ">
            <div className="w-60 h-auto">
              <Image
                src="/prod_org.webp"
                title="Calidad natural"
                alt="picture"
                quality={100}
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center px-10">
            <h3 className="text-sm text-[#091E42] font-medium lg:px-0 px-4">{translate('section-about')}</h3>
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
                title="Calidad natural"
                alt="Picture of the author"
                quality={100}
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center px-10">
            <h3 className="text-sm text-gray-700">{translate('section-about-quality')}</h3>
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
          <p className="font-bold lg:text-4xl text-3xl italic text-center  text-white">ESPECIAS Y <br></br> CONDIMENTOS</p>
          <div className="lg:w-96 w-72 h-auto mx-auto">
            <Image
              title="Especias y condimentos"
              src="/especias_condimentos_.webp"
              alt="picture"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-5xl italic font-bold text-center text-white">100%</h1>
            <p className="font-bold text-4xl italic text-center  text-white"> ORGÁNICOS</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(73,157,145,0.4)] bg-no-repeat object-fill max-h-80 h-full py-20" style={{ backgroundImage: "url('/camp_cos_lima.webp')" }}>
        <div className="py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl sm:mx-auto mx-auto w-full justify-center items-center">
          <p className="font-bold lg:text-4xl text-3xl text-center text-white">Aliados</p>
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
        <SendEmail />
      </div>
      <Footer />
      <Preloader />
    </main>
  )
}
