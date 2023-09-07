export default function Footer() {
    return (
        <footer className="bg-[#F7F8F9]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Nates Export</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-medium text-gray-900 uppercase">Contacto</h2>
                            <ul className="text-gray-500 font-normal text-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Tacna, Perú</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">+51 961 361 759</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">logistica@natesexport.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-medium text-gray-900 uppercase">Productos</h2>
                            <ul className="text-gray-500 font-normal text-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Orégano</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Café</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Conocer más...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline">Nates Export</a>. Todos los derechos reservados.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}