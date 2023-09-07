'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Breadcrumbs from '@/components/breadcrumbs'

export default function Product() {
    const router = useRouter()

    const params = useParams();
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    const [widget, steWidget] = useState(null)

    useEffect(() => {
        switch (params.item) {
            case 'oregano-organico':
                setUrl('/oregano_extra_min.jpg')
                setName('Oregano Organico')
                steWidget(<div className="border w-100 py-2 px-2 my-5 rounded-sm">
                    <div className="pb-5">
                        <h3 className="text-sm uppercase font-semibold">COMPOSICÍON / INGREDIENTES</h3>
                        <p className="text-sm text-gray-500">Hojas y flores de orégano desecadas, limpias (género Origanum spp)</p>
                    </div>
                    <div className="">
                        <h3 className="text-sm uppercase font-semibold">TRATAMIENTO / PROCESAMIENTO</h3>
                        <p className="text-sm text-gray-500">Las hojas y flores de orégano se reciben desecadas y se someten a una limpieza física mediante zarandas, para retirar los tallos y peciolos, y otra materia extraña que pueda contener y luego se somete a un proceso de limpieza por tamizado mediante zarandas, donde separa también por tamaños, posteriormente se somete a una limpieza neumática. La maquinaria cuenta con imanes para el retiro de los fragmentos de metal. El orégano limpio, se estandariza antes de su envasado y comercialización</p>
                    </div>
                    <div className="py-5">
                        <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS FÍSICO QUÍMICAS</h3>
                        <table className="table-fixed text-sm text-gray-500 my-1">
                            <tbody>
                                <tr className="border">
                                    <td className="border-r px-1">Humedad:</td>
                                    <td className="border-r px-1">Máx. 12%</td>
                                </tr>
                                <tr className="border">
                                    <td className="border-r px-1">Cenizas totales:</td>
                                    <td className="border-r px-1">Máx 10%</td>
                                </tr>
                                <tr className="border">
                                    <td className="border-r px-1">Cenizas insolubles:</td>
                                    <td className="border-r px-1">Máx 1.90%</td>
                                </tr>
                                <tr className="border">
                                    <td className="border-r px-1">Fibra bruta:</td>
                                    <td className="border-r px-1">Máx 9.50%</td>
                                </tr>
                                <tr className="border">
                                    <td className="border-r px-1">Aceite volátil:</td>
                                    <td className="border-r px-1">Máx 1.30%</td>
                                </tr>
                            </tbody>
                        </table>
                        <em className="text-xs text-gray-500">Referencia: NTP 209.190: 2011 Enmienda 1. Orégano Requisitos</em>
                    </div>
                    <div className="">
                        <h3 className="text-sm uppercase font-semibold">CONTENIDO DE MATERIA EXTRAÑA</h3>
                        <p className="text-sm text-gray-500">•El hongo procesado se conserva porque está desecado, la baja humedad que contiene permite su conservacíon.</p>
                    </div>
                    <div className="my-5">
                        <h3 className="text-sm uppercase font-semibold">TRATAMIENTO DE CONSERVACIÓN</h3>
                        <p className="text-sm text-gray-500">•Máx. 1.2% orégano procesado</p>
                        <p className="text-sm text-gray-500 pb-1">•Máx. 3.0% orégano semiprocesado</p>
                        <em className="text-xs text-gray-500">Referencia: NTP 209.190: 2011 Enmienda 1. Orégano Requisitos</em>
                        <p className="text-sm text-gray-500 pt-1">•Fragmentos de insectos, indicadores de faltas de Buenas Prácticas (no considerados indicativos de riesgo). Máx. 20 en 10 g</p>
                        <p className="text-sm text-gray-500">•Insectos muertos propios del cultivo Máx. 20 en 10 g</p>
                        <p className="text-sm text-gray-500 pb-1">•Fragmentos de pelo de roedor Máx. 1 en 10 g</p>
                        <em className="text-xs text-gray-500">Referencia: RCD 14-2014 Sobre materias extrañas, Macroscópicas y microscópicas en Alimentos y Bebidas. ANVISA -BRASIL</em>
                    </div>
                    <div className="">
                        <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS MICROBIOLÓGICAS</h3>
                        <p className="text-sm text-gray-500">•Aerobios mesófilos Máx. 10^5 ufc/g</p>
                        <p className="text-sm text-gray-500">•Mohos Máx. 10^3 ufc/g</p>
                        <p className="text-sm text-gray-500">•Coliformes Máx. 10^2 ufc/g</p>
                        <p className="text-sm text-gray-500">•Salmonella ausencia en 25 gramos</p>
                        <em className="text-xs text-gray-500">Referencia: RM 591- MINSA-2008</em>
                    </div>
                    <div className="my-5">
                        <h3 className="text-sm uppercase font-semibold">CONTAMINANTES</h3>
                        <p className="text-sm text-gray-500">•Plomo Máx. 0.3 mg/Kg</p>
                        <p className="text-sm text-gray-500">•Cadmio Máx. 0.2 mg/Kg</p>
                        <p className="text-sm text-gray-500">•Arsénico Máx. 0.3 mg/Kg</p>
                        <em className="text-xs text-gray-500">Referencia RDC 42-2014 ANVISA BRASIL (MERCOSUR)</em>
                    </div>
                    <div className="">
                        <h3 className="text-sm uppercase font-semibold">Tratamiento de conservación</h3>
                        <p className="text-sm text-gray-500">El orégano procesado se conserva porque está desecado, la baja humedad que contiene permite su conservación.  </p>
                    </div>
                    <div className="my-5">
                        <h3 className="text-sm uppercase font-semibold">Presentación</h3>
                        <p className="text-sm text-gray-500">✓ Sacos de Polipropileno con un contenido neto de 20.0Kg</p>
                        <p className="text-sm text-gray-500">✓Bolsas de papel, (doble bolsa) con una bolsa de Polietileno de Baja densidad con un contenido Neto de 12.5 Kg</p>
                    </div>
                    <div className="">
                        <h3 className="text-sm uppercase font-semibold">CONDICIONES DE ALMACENAMIENTO Y DISTRIBUCIÓN</h3>
                        <p className="text-sm text-gray-500">En un lugar fresco y seco, protegido de toda humedad</p>
                    </div>
                    <div className="my-5">
                        <h3 className="text-sm uppercase font-semibold">VIDA ÚTIL</h3>
                        <p className="text-sm text-gray-500">12 meses desde la fecha de envasado</p>
                    </div>
                    <div className="">
                        <h3 className="text-sm uppercase font-semibold">INSTRUCCIONES DE USO</h3>
                        <p className="text-sm text-gray-500">Se utiliza como saborizante y condimento.</p>
                    </div>
                </div>)
                break
            case 'curcuma':
                setUrl('/curcuma_peruana.jpg')
                setName('Cúrcuma')
                // steWidget(curcumaWidget)
                break
            case 'aceitunas-peruanas':
                setUrl('/aceitunas_peruanas.jpg')
                setName('Aceitunas Peruanas')
                // steWidget(aceitunaWidget)
                break
            case 'hongo-deshidratado':
                setUrl('/hongo_deshidratado_min.jpg')
                setName('Hongo Deshidratado')
                break
            case 'cafe-peruano':
                setUrl('/cafe_peruano.jpg')
                setName('Café Peruano')
                break
            default:
                router.push('/shop')
                break
        }
    }, [params.item, router])

    return (
        <div className="bg-white pb-20">
            <div className="flex justify-center py-10">
                <Breadcrumbs
                    name={name}
                />
            </div>
            <div className="py-10 grid grid-cols-1 items-center sm:grid-cols-2 max-w-5xl sm:mx-auto mx-auto w-full justify-center px-5 gap-5">
                <div className=" w-72 h-auto mx-auto">
                    <Image
                        src={url}
                        alt={name}
                        width={500}
                        height={500}
                        quality={100}
                    />
                </div>
                <div className="">
                    <h3 className="text-left uppercase text-sm font-semibold">{name}</h3>
                    <div className="py-5">
                        <p className="text-sm text-gray-500">Product description. Ideal place to add more details about your product such as its size, materials, instructions for use and maintenance.</p>
                        <p className="pt-5 text-xs font-light text-black">🚛 Hacemos envios al por mayor a todo el Perú y nivel internacional con previa coordinación. Para ello deberán enviarnos sus datos completos para poder realizar el envio correspondiente.</p>
                    </div>
                    <button type="submit" onClick={() => router.push('https://api.whatsapp.com/send/?phone=961361759&text=YOUR_MESSAGE')} className="sm:w-auto w-full text-white bg-[#499d91] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Comprar ahora</button>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-10 w-full overflow-x-auto">
                {widget}
            </div>
        </div >
    );
}
