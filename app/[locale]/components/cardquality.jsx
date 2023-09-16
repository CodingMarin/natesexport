import Image from 'next/image'

export default function cardFeatured({ url, title, description }) {
    return (
        <div className="max-w-sm rounded-lg py-5 px-1 mx-4 overflow-hidden bg-white shadow-sm">
            <div className="w-24 h-auto mx-auto">
                <Image
                    src={url}
                    alt={title}
                    quality={100}
                    width={500}
                    height={500}
                />
            </div>
            <div className="px-6 py-4 text-center">
                <h1 className="font-bold text-lg mb-2 text-[#499d91] font-poppinsmedium">{title}</h1>
                <p className="text-sm text-[#091E42] font-medium lg:px-0 px-4 pt-4">{description}</p>
            </div>
        </div>
    )
}