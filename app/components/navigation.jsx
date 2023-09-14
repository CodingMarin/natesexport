"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const links = [
    {
        label: "Inicio",
        route: "/"
    },
    {
        label: "Tienda",
        route: "/shop"
    },
    {
        label: "Sobre nosotros",
        route: "#"
    },
    {
        label: "Donde comprar",
        route: "#"
    },
    {
        label: "Blog",
        route: "#"
    }

]

function classNames(...classes) {
    return classes.filter(Boolean).join("")
}

export default function Navigation() {
    const [isShowing, setIsShowin] = useState(true)
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 700) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <>
            <div className="lg:static sticky top-0 z-10">
                <div className="overflow-hidden">
                    <nav className={classNames(scrolling ? "bg-white z-40 transition duration-1000" : "backdrop-blur backdrop-filter bg-opacity-75 transition duration-1000", "h-[60px] lg:py-0 py-2")}>
                        < div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between lg:justify-center items-center h-full w-full" >
                            <div className="visible">
                                <a className="flex items-center" href="https://natesexport.com/">
                                    <Image
                                        className="drop-shadow-lg w-14"
                                        title="Nates Export Logo"
                                        src="/logo.png"
                                        alt="Logo"
                                        quality={100}
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <div type="button" className="lg:hidden flex order-1">
                                    <div className="flex group items-center justify-between hover:bg-opacity-100 transition duration-500 rounded">
                                        <div className="flex items-center justify-center">
                                            <button className="mx-1" onClick={() => setIsShowin(isShowing => !isShowing)}>
                                                <div className="space-y-1 group cursor-pointer relative w-4 h-[8px]">
                                                    <span className="transition-all ease-out block h-[1.5px] bg-slate-300 group-hover:bg-slate-300 w-6"></span>
                                                    <span className="transition-all ease-out block h-[1.5px] bg-slate-300 group-hover:bg-slate-300 w-6"></span>
                                                    <span className="transition-all ease-out block h-[1.5px] bg-slate-300 group-hover:bg-slate-300 w-5"></span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex grow items-center mx-auto w-full content-center justify-center gap-3 drop-shadow-lg">
                                {links.map((link, i) => (
                                    <div key={i} className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-light ease-out duration-200 outline-none transition-all outline-0 border hover:bg-scale-500 shadow-none border-transparent px-2.5 py-1">
                                        <Link href={link.route} className="truncate text-white hover:text-slate-300 transition duration-300 text-[0.813rem]">
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="lg:flex hidden items-center justify-end">
                                <Image
                                    className="drop-shadow-md h-14 w-44"
                                    title="Logo CCL"
                                    src="/logo-ccl-2023.webp"
                                    alt="logo"
                                    width={600}
                                    height={600}
                                    priority
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='sticky z-[2000] top-[76px]'>
                {
                    isShowing && (
                        <div className='transform transition-all ease-in-out'>
                            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}