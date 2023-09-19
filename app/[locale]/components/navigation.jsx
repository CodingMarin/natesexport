"use client"

import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Disclosure, Menu, Transition } from "@headlessui/react"

const links = [
    { label: "Inicio", route: "/" },
    { label: "Tienda", route: "/shop" },
    { label: "Sobre nosotros", route: "#" },
    { label: "Donde comprar", route: "#" },
    { label: "Blog", route: "#" }
]

function classNames(...classes) {
    return classes.filter(Boolean).join("")
}

export default function Navigation() {
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
        <Disclosure as="nav" className="lg:static sticky top-0 z-10">
            {({ open }) => (
                <>
                    <div className="overflow-hidden">
                        <div className={classNames(scrolling ? "bg-white z-40 transition duration-1000 shadow-md" : "transition duration-1000", "h-[60px] lg:py-0 py-2")}>
                            <div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between lg:justify-center items-center h-full w-full">
                                <div className="visible">
                                    <Image
                                        className="drop-shadow-lg w-44"
                                        title="Nates Export Logo"
                                        src="/logo_nates_export.svg"
                                        alt="Logo"
                                        width={600}
                                        height={600}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
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
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="sm:hidden bg-white shadow-md h-screen">
                            <div className="border-t border-gray-200 pt-4 pb-3">
                                <div className="flex items-center px-4">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                        </div>
                                    </div>
                                </div>
                                {links.map((item) => (
                                    <Disclosure.Button key={item.id} as="a">
                                        <div className="mt-3 space-y-1">
                                            <Link href={item.route} className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                                                {item.label}
                                            </Link>
                                        </div>
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}