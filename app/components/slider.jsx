'use client'

import Image from 'next/image'
import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import Products from '@/utils/products'

//Guarda un limite de 4 items
const product_reduce = Products.slice(0, 5)

//JQUERY
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Slider = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }

    return (
        <div className="row-auto">
            <div className="pb-2 bg-transparent" id="owl-carousel-products">
                <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
                    <OwlCarousel className="owl-theme" loop margin={4} nav={true}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {Products && Products.length > 0
                            ? product_reduce.map((product, i) => {
                                return (
                                    <div key={i} id="featuredProducts" className="w-100 mx-auto">
                                        <div className="productListing">
                                            <div>
                                                <div className="mx-auto text-center">
                                                    <figure className="max-w-full h-auto mx-auto rounded-md">
                                                        <Image
                                                            src={product.img}
                                                            quality={100}
                                                            width={500}
                                                            height={500}
                                                            alt={product.name}
                                                            title={product.name}
                                                        />
                                                        <span className="mx-auto mt-1">
                                                        <span className="text-sm text-[#091E42] font-medium">{product.name}</span>
                                                    </span>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : ""}
                    </OwlCarousel>
                </ul>
            </div>
        </div>
    )
}
export default Slider