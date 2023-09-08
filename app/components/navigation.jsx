'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const links = [
    {
        label: 'Inicio',
        route: '/'
    },
    {
        label: 'Tienda',
        route: '/shop'
    },
    {
        label: 'Sobre nosotros',
        route: '/about'
    },
    {
        label: 'Donde comprar',
        route: '/sale'
    },
    {
        label: 'Blog',
        route: '/blog'
    }

]

export default function Navigation() {

    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className="transition-all  lg:bg-transparent bg-emerald-600">
            <div className="sticky top-0 overflow-hidden">
                <nav className="h-16">
                    <div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between lg:justify-center items-center h-full w-full">
                        <div className="visible">
                            <a className="flex items-center" href="/">
                                <Image className="drop-shadow-lg animate-pulse" src="/logo.png" alt="logo" quality={100} width={38} height={38}></Image>
                            </a>
                        </div>
                        <div className="flex items-center gap-6">
                            <div type="button" className="lg:hidden flex order-1">
                                <div className=" flex group items-center justify-between hover:bg-opacity-100 border transition border-slate-100 pl-1.5 md:pl-3 pr-1.5 w-full h-[32px] rounded text-lighter ">
                                    <div className="flex items-center justify-center">
                                        <button className="mx-1">
                                            <div className="space-y-1 group cursor-pointer relative w-4 h-[8px]">
                                                <span className="transition-all ease-out block h-px bg-slate-200 group-hover:bg-slate-100 w-4 group-hover:w-4"></span>
                                                <span className="transition-all ease-out block h-px bg-slate-200 group-hover:bg-slate-100 w-4 group-hover:w-4"></span>
                                                <span className="transition-all ease-out block h-px bg-slate-200 group-hover:bg-slate-100 w-4 group-hover:w-4"></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex grow items-center justify-center gap-3 drop-shadow-lg text-sm">
                            {links.map((link, i) => (
                                <div key={i} className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700 border-transparent px-2.5 py-1">
                                    <Link href={link.route}>
                                        <span className="truncate text-white hover:text-[#9ae701] transition duration-300">{link.label}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="lg:flex hidden items-center justify-end text-sm">
                            <select className="border border-slate-100 rounded-md px-1 py-1 text-white bg-transparent">
                                <option className="">English</option>
                                <option className="">Spanish</option>
                                <option className="">Portugues</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}