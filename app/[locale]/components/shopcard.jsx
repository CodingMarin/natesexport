import Image from 'next/image'
import Link from 'next/link'

export default function shopCard({ picture, title, url }) {
    return (
        <div class=" bg-white border border-slate-100 rounded-lg shadow-sm">
            <Image
                class="p-8 rounded-t-lg"
                src={picture}
                alt="product image"
                width={500}
                height={500}
            />
            <div class="px-5 pb-5">
                <h5 class="text-center text-sm font-medium tracking-tight text-gray-900">{title}</h5>
                <div class="flex gap-x-5 gap-y-5 items-center justify-center pt-10">
                    <Link href="https://api.whatsapp.com/send/?phone=961361759&text=Estoy interesado en comprar tus productos" class="w-full text-white bg-[#BADA55] hover:bg-lime-600 transition duration-150 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm py-2.5 text-center">Comprar</Link>
                    <Link href={url} class="w-full text-black hover:text-slate-700 ring-[#BADA55] ring-2 hover:bg-lime-100 transition duration-200 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center">Detalles</Link>
                </div>
            </div>
        </div>
    )
}