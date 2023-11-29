"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Shop() {

    let [categories] = useState({
        Orgánico: [
            {
                id: 1,
                name: "Orégano Orgánico",
                url: "/shop/product/oregano",
                img: "oregano_min",
            },
            {
                id: 2,
                name: "Cúrcuma",
                url: "/shop/product/curcuma",
                img: "curcuma_peruana",
            },
            {
                id: 3,
                name: "Aceitunas",
                url: "/shop/product/aceitunas",
                img: "aceitunas_peruanas",
            },
            {
                id: 4,
                name: "Hongo Deshidratado",
                url: "/shop/product/hongo",
                img: "hongo_deshidratado_min",
            },
            {
                id: 5,
                name: "Café Orgánico",
                url: "/shop/product/cafe",
                img: "cafe_peruano",
            }
        ],
        Hidrobiológico: [
            {
                id: 1,
                name: "Aleta de Pota",
                url: "/shop/product/aleta-de-pota",
                img: "aleta-de-pota",
            },
            {
                id: 2,
                name: "Filete de Pota",
                url: "/shop/product/filete-de-pota",
                img: "filete-de-pota",
            },
            {
                id: 3,
                name: "Nuca de Pota",
                url: "/shop/product/nuca-de-pota",
                img: "nuca-de-pota",
            },
            {
                id: 4,
                name: "Reproductor de pota",
                url: "/shop/product/reproductor-de-pota",
                img: "reproductor-de-pota",
            },
            {
                id: 1,
                name: "Tentaculos de Pota",
                url: "/shop/product/tentaculos-de-pota",
                img: "Tentaculos-de-pota",
            },
        ],
        Consumo: [
            {
                id: 1,
                name: "Orégano Orgánico",
                url: "/shop/product/oregano",
                img: "oregano_min",
            },
        ],
    })

    return (
        <div className="bg-white py-10">
            <Tab.Group>
                <Tab.List className="max-w-sm mx-auto flex px-4 space-x-4">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-full py-2.5 text-sm font-medium leading-5 px-4 text-center bg-[#499d91]',
                                    'focus:outline-none',
                                    selected
                                        ? 'shadow text-white'
                                        : ' bg-white text-[#499d91] w-auto px-3 border-gray-200 border-2 hover:text-[#488d81] transition duration-200'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2 foc">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel key={idx}>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl sm:mx-auto mx-auto w-full justify-center gap-5">
                                {posts.map((product) => (
                                    <div key={product.id} className=" bg-white border border-slate-100 rounded-lg shadow-sm">
                                        <Image
                                            className="p-8 rounded-t-lg"
                                            src={`/${product.img}.webp`}
                                            alt={product.name}
                                            width={500}
                                            height={500}
                                            quality={100}
                                            loading='lazy'
                                        />
                                        <div className="px-5 pb-5">
                                            <h5 className="text-center text-sm font-medium tracking-tight text-gray-900">{product.name}</h5>
                                            <div className="flex gap-x-2 gap-y-5 items-center justify-center pt-10">
                                                <Link href="https://api.whatsapp.com/send/?phone=961361759&text=Estoy interesado en comprar tus productos" className="w-full text-white bg-[#BADA55] hover:bg-lime-600 transition duration-150 focus:outline-none focus:ring-0 font-medium rounded-full text-sm py-2.5 text-center">Comprar</Link>
                                                <Link href={`${product.url}#products`} className="w-full text-black hover:text-slate-700 ring-[#BADA55] ring-2 hover:bg-lime-100 transition duration-200 focus:ring-0 focus:outline-none font-medium rounded-full text-sm py-2.5 text-center">Detalles</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}