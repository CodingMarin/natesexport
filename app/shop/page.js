import ShopCard from '@/components/shopcard'

export default function Shop() {
    return (
        <div className="bg-white py-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl sm:mx-auto mx-auto w-full justify-center gap-5">
                <ShopCard
                    picture={'/oregano_extra_min.jpg'}
                    title={'Oregano Organico'}
                    url={'/shop/product/oregano-organico'}
                />
                <ShopCard
                    picture={'/curcuma_peruana.jpg'}
                    title={'Curcuma Peruana'}
                    url={'/shop/product/curcuma'}
                />
                <ShopCard
                    picture={'/aceitunas_peruanas.jpg'}
                    title={'Aceitunas Peruanas'}
                    url={'/shop/product/aceitunas-peruanas'}
                />
                <ShopCard
                    picture={'/hongo_deshidratado_min.jpg'}
                    title={'Hongo Deshidratado'}
                    url={'/shop/product/hongo-deshidratado'}
                />
                <ShopCard
                    picture={'/cafe_peruano.jpg'}
                    title={'Café Organico'}
                    url={'/shop/product/cafe-peruano'}
                />
            </div>
        </div>
    )
}