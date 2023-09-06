import Image from 'next/image'

export default function cardFeatured({ url, title, description }) {
    return (
        <div className="max-w-sm rounded-lg py-5 px-1 mx-4 overflow-hidden bg-white shadow-sm">
            <div className="w-24 h-auto mx-auto">
                <Image
                    src={url}
                    alt="Picture of the author"
                    quality={100}
                    width={500}
                    height={500}
                    blurDataURL="data:..."
                    placeholder="blur" // Optional blur-up while loading
                />
            </div>
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2 text-[#499d91]">{title}</div>
                <p className="text-gray-800 text-sm pt-4">{description}</p>
            </div>
        </div>
    )
}