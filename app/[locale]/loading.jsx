import Image from 'next/image'

export default function Loading() {
    return (
        <div className='fixed h-screen w-screen justify-center bg-white flex items-center z-20'>
            <Image
        className='w-16 h-16'
        src="/loading.gif"
        alt=""
        width={100}
        height={100}
        />
        </div>
    )
}