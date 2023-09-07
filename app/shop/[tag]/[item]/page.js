'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Breadcrumbs from '@/components/breadcrumbs'
import aceitunaWidget from '@/components/aceitunas'
import curcumaWidget from '@/components/curcuma'
import oreganoWidget from '@/components/oregano'

export default function Product() {
    const router = useRouter()

    const params = useParams();
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        switch (params.item) {
            case 'oregano-organico':
                setUrl('/oregano_extra_min.jpg')
                setName('Oregano Organico')
                setDescription('Descripción del orégano orgánico')
                steWidget(oreganoWidget)
                break
            case 'curcuma':
                setUrl('/curcuma_peruana.jpg')
                setName('Cúrcuma')
                setDescription('Descripción de la cúrcuma')
                steWidget(curcumaWidget)
                break
            case 'aceitunas-peruanas':
                setUrl('/aceitunas_peruanas.jpg')
                setName('Aceitunas Peruanas')
                setDescription('Descripción de las aceitunas peruanas')
                steWidget(aceitunaWidget)
                break
            case 'hongo-deshidratado':
                setUrl('/hongo_deshidratado_min.jpg')
                setName('Hongo Deshidratado')
                setDescription('Descripción del hongo deshidratado')
                break
            case 'cafe-peruano':
                setUrl('/cafe_peruano.jpg')
                setName('Café Peruano')
                setDescription('Descripción del café peruano')
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
                <div className="relative overflow-x-auto">
                    <table className="border text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="border px-6 py-3 uppercase text-sm">Product name</th>
                                <th scope="col" className="px-6 py-3 uppercase text-sm">{name}</th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Descripción
                                </th>
                                <td className="px-6 py-4">Estas aceitunas son cosechadas maduras en el árbol y no requieren de ningún tratamiento previo a su proceso de fermentación natural, donde se produce el ácido láctico disminuye el pH del producto, asegurando su estabilidad. Para el envasado se utiliza su líquido de gobierno como parte de la salmuera para mantener sus características organolépticas y asegurar su adecuada conservación.</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Características físico químicas
                                </th>
                                <td className="px-6 py-4">✓ Hp MAX 4 -5%
                                    ✓ Acides libre MIN 5G AC. LACTICO / 100 SOLUCION ✓ °Be (Rango) 5-10
                                    ✓ APARIENCIA NEGRA SEGÚN REQUERIMIENTO</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Contenido de materia extraña
                                </th>
                                <td className="px-6 py-4">✓ Fragmentos de insectos, indicadores de faltas de Buenas Prácticas (no considerados indicativos de riesgo). Máx. 20 en 10 g
                                    ✓ Insectos muertos propios del cultivo Máx. 20 en 10 g
                                    ✓ Fragmentos de pelo de roedor Máx. 1 en 10 g
                                    Referencia: RCD 14-2014 Sobre materias extrañas, Macroscópicas y microscópicas en Alimentos y Bebidas. ANVISA -BRASIL</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Características microbiológicas
                                </th>
                                <td className="px-6 py-4">
                                    ✓ Bacterias Mesófilas Aerobias 104 – 106 ufc/g máximo
                                    ✓ Hongos y levaduras 102 – 103 ufc/g máximo
                                    ✓ Coliformes totales Ausencia NMP/g
                                    ✓ Salmonella Ausencia / 25g
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Organoleptico
                                </th>
                                <td className="px-6 py-4">
                                    ✓ Tipo Aceituna sevillana negra entera
                                    ✓ Color Rojizo, negro violáceo, violeta oscuro.
                                    ✓ Olor y sabor Característico
                                    ✓ Textura Firmes y resistentes
                                    ✓ Calibre 9 0/110, 110/130, 130/150, 150/180
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Tratamiento de conservación
                                </th>
                                <td className="px-6 py-4">
                                    ✓ Las aceitunas son tratadas con salmuera
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Presentación
                                </th>
                                <td className="px-6 py-4">
                                    ✓ Bidones 60 kg / 15 kg
                                    ✓ Baldes 15 kg / 4 kg
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Condiciones de almacenamiento y distribución
                                </th>
                                <td className="px-6 py-4">
                                    Almacenar en lugar fresco y seco a temperatura no mayor a 25°C, en un ambiente fresco y ventilado sin exposición directa al sol. Después de abierto refrigerar el producto y mantenerlo en su salmuera.
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Vida útil
                                </th>
                                <td className="px-6 py-4">
                                    24 meses desde la fecha de envasado
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Forma de consumo
                                </th>
                                <td className="px-6 py-4">
                                    De consumo directo Desinado para todo tipo de personas
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Rotulado
                                </th>
                                <td className="px-6 py-4">
                                    ✓ Nombre del producto (Nombre científico)
                                    ✓ Peso Neto
                                    ✓ Peso Bruto
                                    ✓ Fecha de envasado
                                    ✓ Fecha de vencimiento
                                    ✓ Número de lote
                                    ✓ Nombre y dirección de la empresa empacadora
                                    ✓ Nombre y dirección de la empresa que exportadora
                                    ✓ Nombre y dirección de la empresa de destino
                                    ✓ País de producción
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}
