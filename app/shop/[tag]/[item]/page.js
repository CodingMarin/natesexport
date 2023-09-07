'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Breadcrumbs from '@/components/breadcrumbs'
// import aceitunaWidget from '@/components/aceitunas'
// import curcumaWidget from '@/components/curcuma'
// import oreganoWidget from '@/components/oregano'

export default function Product() {
    const router = useRouter()

    const params = useParams();
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    // const [widget, steWidget] = useState(null)

    useEffect(() => {
        switch (params.item) {
            case 'oregano-organico':
                setUrl('/oregano_extra_min.jpg')
                setName('Oregano Organico')
                // steWidget(oreganoWidget)
                break
            case 'curcuma':
                setUrl('/curcuma_peruana.jpg')
                setName('Cúrcuma')
                // steWidget(curcumaWidget)
                break
            case 'aceitunas-peruanas':
                setUrl('/aceitunas_peruanas.jpg')
                setName('Aceitunas Peruanas')
                // steWidget(aceitunaWidget)
                break
            case 'hongo-deshidratado':
                setUrl('/hongo_deshidratado_min.jpg')
                setName('Hongo Deshidratado')
                break
            case 'cafe-peruano':
                setUrl('/cafe_peruano.jpg')
                setName('Café Peruano')
                break
            default:
                router.push('/shop')
                break
        }
    }, [params.item, router])

    return (
        <div className="bg-white pb-20">
            <div className="flex justify-center py-10">
                <Breadcrumbs
                    name={name}
                />
            </div>
            <div className="py-10 grid grid-cols-1 items-center sm:grid-cols-2 max-w-5xl sm:mx-auto mx-auto w-full justify-center px-5 gap-5">
                <div className=" w-72 h-auto mx-auto">
                    <Image
                        src={url}
                        alt={name}
                        width={500}
                        height={500}
                        quality={100}
                    />
                </div>
                <div className="">
                    <h3 className="text-left uppercase text-sm font-semibold">{name}</h3>
                    <div className="py-5">
                        <p className="text-sm text-gray-500">Product description. Ideal place to add more details about your product such as its size, materials, instructions for use and maintenance.</p>
                        <p className="pt-5 text-xs font-light text-black">🚛 Hacemos envios al por mayor a todo el Perú y nivel internacional con previa coordinación. Para ello deberán enviarnos sus datos completos para poder realizar el envio correspondiente.</p>
                    </div>
                    <button type="submit" onClick={() => router.push('https://api.whatsapp.com/send/?phone=961361759&text=YOUR_MESSAGE')} className="sm:w-auto w-full text-white bg-[#499d91] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Comprar ahora</button>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-10 w-full overflow-x-auto">
                {/* {widget} */}
            </div>
        </div >
    );
}
