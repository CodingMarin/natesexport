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
    const [widget, setWidget] = useState(null)

    useEffect(() => {
        switch (params.item) {
            case 'oregano-organico':
                setUrl('/oregano_extra_min.jpg')
                setName('Oregano Organico')
                setWidget(<div className="border w-100 py-2 px-2 my-5 rounded-sm">
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
                setWidget(
                    <div className="border w-100 py-2 px-2 my-5 rounded-sm">
                        <div className="mb-4">
                            <h3 className="text-sm uppercase font-semibold">Producto</h3>
                            <p className="text-sm text-gray-500">Cúrcuma  molida, origen Perú  ,  envasada  en sacos de polipropileno  con interior de polietieleno  de  25 kgs./ Ground  curcuma,  origin Peru,  packed in polipropylene bags + liner of  25 kgs. net each </p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">ESPECIFICACIONES TECNICAS / FISICOQUIMICAS</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Malla / Screen</td>
                                        <td className="border-r px-1">U.S. # 40</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Contenido de curcumina / curcumin  content</td>
                                        <td className="border-r px-1">minimum 4.5%</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Humedad / Moisture</td>
                                        <td className="border-r px-1">Max. 12% </td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Pesticidas / Pesticide</td>
                                        <td className="border-r px-1">None</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CALIDAD SENSORIAL  & SENSORIAL QUALITY</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Sabor & Aroma</td>
                                        <td className="border-r px-1">Característico, libre de  cualquier otro  olor y sabor </td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Color</td>
                                        <td className="border-r px-1">Amarillo fuerte</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CONTENIDO DE MATERIA EXTRAÑA</h3>
                            <p className="text-sm text-gray-500">•Fragmentos de insectos, indicadores de faltas de Buenas Prácticas (no considerados indicativos de riesgo). Máx. 20 en 10 g</p>
                            <p className="text-sm text-gray-500">•Insectos muertos propios del cultivo Máx. 20 en 10 g</p>
                            <p className="text-sm text-gray-500">•Fragmentos de pelo de roedor Máx. 1 en 10 g</p>
                            <em className="text-xs text-gray-500">Referencia: RCD 14-2014 Sobre materias extrañas, Macroscópicas y microscópicas en Alimentos y Bebidas. ANVISA -BRASIL</em>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS MICROBIOLÓGICAS</h3>
                            <p className="text-sm text-gray-500">•Aerobios mesófilos Máx. 105 ufc/g</p>
                            <p className="text-sm text-gray-500">•Mohos Máx. 103 ufc/g</p>
                            <p className="text-sm text-gray-500">•Coliformes Máx. 102 ufc/g</p>
                            <p className="text-sm text-gray-500">•Salmonella ausencia en 25 gramos</p>
                            <em className="text-xs text-gray-500">Referencia: RM 591- MINSA-2008</em>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CONTAMINANTES</h3>
                            <p className="text-sm text-gray-500">•Plomo Máx. 0.3 mg/Kg</p>
                            <p className="text-sm text-gray-500">•Cadmio Máx. 0.2 mg/Kg</p>
                            <p className="text-sm text-gray-500">•Arsénico Máx. 0.3 mg/Kg</p>
                            <em className="text-xs text-gray-500">Referencia RDC 42-2014 ANVISA BRASIL (MERCOSUR)</em>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CONDICIONES DE ALMACENAMIENTO Y DISTRIBUCIÓN</h3>
                            <p className="text-sm text-gray-500">En un lugar fresco y seco, protegido de toda humedad</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">VIDA ÚTIL</h3>
                            <p className="text-sm text-gray-500">24 meses desde la fecha de envasado</p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">INSTRUCCIONES DE USO</h3>
                            <p className="text-sm text-gray-500">Se utiliza como saborizante y condimento.</p>
                        </div>
                    </div>
                )
                break
            case 'aceitunas-peruanas':
                setUrl('/aceitunas_peruanas.jpg')
                setName('Aceitunas Peruanas')
                setWidget(
                    <div className="border w-100 py-2 px-2 my-5 rounded-sm">
                        <div className="mb-4">
                            <h3 className="text-sm uppercase font-semibold">Producto</h3>
                            <p className="text-sm text-gray-500">Estas aceitunas son cosechadas maduras en el árbol y no requieren de ningun tratamiento previo a su proceso de
                                fermentación natural, donde se produce. el ácido láctico disminuye el ph del producto, asegurando su estabilidad.
                                Para el envasado se utiliza su liquido de gobierno como parte de la salmuera para mantener características organolépticas y asegurar su adecuada consevación</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS FÍSICO QUÍMICAS</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Hp</td>
                                        <td className="border-r px-1">MAX 4-5%</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Acides libre</td>
                                        <td className="border-r px-1">MIN 5G AC. LACTICO / 100 SOLUCION</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">ºBe</td>
                                        <td className="border-r px-1">(Rango) 5-10</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">APARIENCIA</td>
                                        <td className="border-r px-1">NEGRA SEGÚN REQUERIMIENTO</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CONTENIDO DE MATERIA EXTRAÑA</h3>
                            <p className="text-sm text-gray-500">•Fragmentos de insectos, indicadores de faltas de Buenas Prácticas (no considerados indicativos de riesgo). Máx. 20 en 10 g</p>
                            <p className="text-sm text-gray-500">•Insectos muertos propios del cultivo Máx. 20 en 10 g</p>
                            <p className="text-sm text-gray-500">•Fragmentos de pelo de roedor Máx. 1 en 10 g</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS MICROBIOLÓGICAS</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Bacterias Mesófilas Aerobias</td>
                                        <td className="border-r px-1">104 - 106 ufc/g máximo</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Hongos y levaduras</td>
                                        <td className="border-r px-1">102 - 103 ufc/g máximo</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Coliformes totales</td>
                                        <td className="border-r px-1">Ausencia NMP/g</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Salmonella</td>
                                        <td className="border-r px-1">Ausencia / 25g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">ORGANOLEPTICO</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Tipo</td>
                                        <td className="border-r px-1">Aceituna sevillana negra entera</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Color</td>
                                        <td className="border-r px-1">Rojizo, negro violáceo, violeta oscuro.</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Olor y sabor</td>
                                        <td className="border-r px-1">Característico</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Textura</td>
                                        <td className="border-r px-1">Firmes y resistentes</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Calibre</td>
                                        <td className="border-r px-1">9 0/110, 110/130, 130/150, 150/180</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">TRATAMIENTO DE CONSERVACIÓN</h3>
                            <p className="text-sm text-gray-500">•El hongo procesado se conserva porque está desecado, la baja humedad que contiene permite su conservacíon.</p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">PRESENTACIÓN</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Bidones</td>
                                        <td className="border-r px-1">60kg / 15kg</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Baldes</td>
                                        <td className="border-r px-1">15kg / 4kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">VIDA UTIL</h3>
                            <p className="text-sm text-gray-500">24 meses desde la fecha de envasado</p>
                        </div>
                    </div>
                )
                break
            case 'hongo-deshidratado':
                setUrl('/hongo_deshidratado_min.jpg')
                setName('Hongo Deshidratado')
                setWidget(
                    <div className="border w-100 py-2 px-2 my-5 rounded-sm">
                        <div className="pb-5">
                            <h3 className="text-sm uppercase font-semibold">COMPOSICÍON / INGREDIENTES</h3>
                            <p className="text-sm text-gray-500">Tapa o sombrero y el tallo (género Boletales)</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">TRATAMIENTO / PROCESAMIENTO</h3>
                            <p className="text-sm text-gray-500">El hongo recolectado se recibe desecado y se someten a una limpieza física mediante zarandas. para retirar cualquier tipo de impuerza, y otra materia extraña que pueda contener, y luego se someten a un proceso de limpieza por tamizado mediante zarandas, donde se separa también por tamaños, posteriormente se somete a una limpieza neumática. La maquinaria cuenta con imanes para el retiro de los fragmentos de metal. El hongo limpio, se estandariza antes de su envasado y comercializaciión</p>
                        </div>
                        <div className="py-5">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS FÍSICO QUÍMICAS</h3>
                            <table className="table-fixed text-sm text-gray-500 my-1">
                                <tbody>
                                    <tr className="border">
                                        <td className="border-r px-1">Humedad</td>
                                        <td className="border-r px-1">Máx. 8%</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Ttrozos pequeños</td>
                                        <td className="border-r px-1">Máx 15%</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Total, de defectos en trozos</td>
                                        <td className="border-r px-1">Máx 30%</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Apariencia</td>
                                        <td className="border-r px-1">Trozos largos</td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border-r px-1">Fibras bruta</td>
                                        <td className="border-r px-1">Máx 4 MGL/KG</td>
                                    </tr>
                                </tbody>
                            </table>
                            <em className="text-xs text-gray-500">Referencia: NTP 209.190: 2011 Enmienda 1.</em>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CONTENIDO DE MATERIA EXTRAÑA</h3>
                            <p className="text-sm text-gray-500">•Fragmentos de insectos, indicadores de faltas de Buenas Prácticas (no considerados indicativos de riesgo). Máx. 20 en 10 g</p>
                            <p className="text-sm text-gray-500">•Insectos muertos propios del cultivo Máx. 20 en 10 g</p>
                            <p className="text-sm text-gray-500">•Fragmentos de pelo de roedor Máx. 1 en 10 g</p>
                            <em className="text-xs text-gray-500">Referencia: RCD 14-2014 Sobre materias extrañas, Macroscópicas y microscópicas en Alimentos y Bebidas. ANVISA -BRASIL</em>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS MICROBIOLÓGICAS</h3>
                            <p className="text-sm text-gray-500">•Aerobios mesófilos Máx. 10^5 ufc/g</p>
                            <p className="text-sm text-gray-500">•Mohos Máx. 10^3 ufc/g</p>
                            <p className="text-sm text-gray-500">•Coliformes Máx. 10^2 ufc/g</p>
                            <p className="text-sm text-gray-500">•Salmonella ausencia en 25 gramos</p>
                            <em className="text-xs text-gray-500">Referencia: RM 591- MINSA-2008</em>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CONTAMINANTES</h3>
                            <p className="text-sm text-gray-500">•Plomo Máx. 0.3 mg/Kg</p>
                            <p className="text-sm text-gray-500">•Cadmio Máx. 0.2 mg/Kg</p>
                            <p className="text-sm text-gray-500">•Arsénico Máx. 0.3 mg/Kg</p>
                            <em className="text-xs text-gray-500">Referencia RDC 42-2014 ANVISA BRASIL (MERCOSUR)</em>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">Tratamiento de conservación</h3>
                            <p className="text-sm text-gray-500">El hongo procesado se conserva porque está desecado, la baja humedad que contiene permite su conservación.</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">Presentación</h3>
                            <p className="text-sm text-gray-500">✓Bolsas de papel, (doble bolsa) con una bolsa de polietileno de baja densidad con un contenido Neto de 15 Kg</p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CONDICIONES DE ALMACENAMIENTO Y DISTRIBUCIÓN</h3>
                            <p className="text-sm text-gray-500">En un lugar fresco y seco, protegido de toda humedad</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">VIDA ÚTIL</h3>
                            <p className="text-sm text-gray-500">24 meses desde la fecha de envasado</p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">INSTRUCCIONES DE USO</h3>
                            <p className="text-sm text-gray-500">Se utiliza como saborizante y condimento.</p>
                        </div>
                    </div>
                )
                break
            case 'cafe-peruano':
                setUrl('/cafe_peruano.jpg')
                setName('Café Peruano')
                setWidget(
                    <div className="border w-100 py-2 px-2 my-5 rounded-sm">
                        <div className="pb-5">
                            <h3 className="text-sm uppercase font-semibold">PRODUCTO</h3>
                            <p className="text-sm text-gray-500">Café tostado, molido y envasado sin preservantes en envase trilaminar</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">DESCRIPCIÓN DEL PROCESO DE ELABORACIÓN</h3>
                            <p className="text-sm text-gray-500">Privado, bajo normativa regulada</p>
                        </div>
                        <div className="py-5">
                            <h3 className="text-sm uppercase font-semibold">LISTADO DE INGREDIENTES 100%</h3>
                            <p className="text-sm text-gray-500">café</p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">PROCEDENCIA</h3>
                            <p className="text-sm text-gray-500">
                                Perú, Departamento de Amazonas, Distrito de Camporredondo
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">IMPORTANCIA DEL PRODUCTO</h3>
                            <p className="text-sm text-gray-500">
                                El producto es cultivado de manera permanente, generando empleo agrícola yayuda social.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">FORMA DE CONSUMO O CONSUMIDORES POTECIALES</h3>
                            <p className="text-sm text-gray-500">
                                A partir de las semillas del café, el proceso final del café El Buen Amanecer es tostado, molido mezclado con azúcar o como café soluble. Sus consumidores potenciales son el Perú
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS DEL PRODUCTO</h3>
                            <p className="text-sm text-gray-500">El proceso de producción se inicia con la mezcla de todas las variedades del café, suelo apropiado, siembra del cultivo, sombreado de café, fertilización orgánica, podas y cuidados, cosecha, proceso post cosecha; despulpado, fermentado, lavado y clasificado, secado, café pergamino, café pilado.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="text-sm uppercase font-semibold">CARACTERÍSTICAS COMERCIALES DEL PRODUCTO</h3>
                            <p className="text-sm text-gray-500">Empaque: Sacos de yute. Peso: 45kg/saco. Almacenamiento: 18-25ºC, 60-75% H.R. Olor: Característico libre de olores extraños ajenos al producto. Limpieza: Grano limpio sin rasgos de tierra u otro material extraño. Estado de desarrollo: Grano de café bien desarrollado sin deformaciones.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-sm uppercase font-semibold">VIDA UTIL DEL CAFÉ</h3>
                            <p className="text-sm text-gray-500">Hasta 1 año, almacenado en mejores condiciones</p>
                        </div>
                    </div>
                )
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
            <div className="max-w-5xl mx-auto py-10 w-full px-4">
                {widget}
            </div>
        </div >
    );
}
