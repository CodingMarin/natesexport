import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

import Image from "next/image"

export default function ShopLayout({
    children,
}) {
    return (
        <section>
            <div className="h-full w-full">
                <Image
                    className="z-[-1] bg-no-repeat w-fit"
                    src="/camp_cosechando_prod.jpg"
                    alt="campesinos cosechando"
                    quality={100}
                    fill
                    blurDataURL="data:..."
                    placeholder="blur" // Optional blur-up while loading
                />
                <Navigation />
                <div className="px-6 lg:px-8 md:pt-12 pt-0">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
                        <div className="flex-col flex gap-y-10 justify-center items-center">
                            <div className="inline">
                                <Image
                                    src="/productos_organicos_edited.png"
                                    alt="productos organicos"
                                    width={311}
                                    height={183}
                                    quality={100}
                                />
                            </div>
                            <div className="inline">
                                <div className="bg-green-600 animate-bounce rounded-full shadow-lg hover:animate-none transition duration-200">
                                    <a href="#products" >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-down-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" strokeWidth="0" fill="#fff"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="products" >
                {children}
            </div>
            <Footer />
            <Preloader />
        </section>
    )
}