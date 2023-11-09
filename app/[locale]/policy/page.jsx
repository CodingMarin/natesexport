import Footer from "@/components/footer";

export default function Policy(){
    return (
        <div className="bg-white h-screen flex px-4">
            <div className="max-w-5xl mx-auto px-2">
            <h1 className="text-lg font-bold py-5">Términos y Condiciones de Uso</h1>
                <p className="text-sm">Bienvenido a Nates Export {("Nosotros", "Nuestra", "Empresa")}. Por favor, lea detenidamente estos Términos y Condiciones de Uso {("Términos")} antes de utilizar nuestro sitio web NATESEXPORT.COM {("Sitio web")}. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, no utilice nuestro sitio web.</p>
                <div className="py-5">
                    <h2 className="font-bold text-base">1. Uso Aceptable</h2>
                    <p className="text-sm">1.1. Usted acepta utilizar nuestro sitio web de acuerdo con todas las leyes y regulaciones aplicables.</p>
                    <p className="text-sm">1.2. No está permitido utilizar nuestro sitio web de manera fraudulenta o para cualquier propósito ilegal o no autorizado.</p>
                    <p className="text-sm">1.3. Usted no debe utilizar nuestro sitio web de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar la eficiencia del sitio web.</p>
                </div>
                <div className="py-5">
                    <h2 className="text-base font-bold">2. Información del Usuario</h2>
                    <p className="text-sm">2.1. Al utilizar nuestro sitio web, usted acepta proporcionar información precisa y completa, incluyendo información de contacto y dirección de envío cuando sea necesario.</p>
                    <p className="text-sm">2.2. Usted es responsable de mantener la confidencialidad de cualquier contraseña que utilice para acceder a nuestro sitio web y de cualquier actividad que ocurra en su cuenta.</p>
                </div>
                <div className="py-5">
                    <h2 className="text-base font-bold">3. Privacidad</h2>
                    <p className="text-sm">3.1. El uso de nuestro sitio web está sujeto a nuestra Política de Privacidad, que puede encontrar en natesexport.com/politicayprivacidad</p>
                </div>
                <div className="py-5">
                    <h2 className="text-base font-bold">4. Pedidos y Envíos</h2>
                    <p className="text-sm">4.1. Los pedidos realizados a través de nuestro sitio web están sujetos a disponibilidad y a nuestra confirmación.</p>
                    <p className="text-sm">4.2. Nos reservamos el derecho de cancelar o rechazar pedidos en cualquier momento, por cualquier razón.</p>
                    <p className="text-sm">4.3. El costo de envío, los plazos de entrega y otros detalles relacionados con los pedidos se proporcionarán durante el proceso de compra.</p>
                </div>
                <div className="py-5">
                    <h2 className="text-base font-bold">5. Propiedad Intelectual</h2>
                    <p className="text-sm">5.1. Todo el contenido en nuestro sitio web, incluyendo imágenes, textos, logotipos y gráficos, está protegido por derechos de propiedad intelectual y es propiedad de Nates Export o de terceros autorizados.</p>
                    <p className="text-sm">5.2. Usted no tiene permiso para utilizar, copiar, reproducir o distribuir ningún contenido de nuestro sitio web sin nuestro consentimiento por escrito.</p>
                </div>
                <div className="py-5">
                    <h2 className="text-base font-bold">6. Cambios en los Términos</h2>
                    <p className="text-sm">6.1. Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigencia una vez que se publiquen en nuestro sitio web. Se le recomienda revisar periódicamente estos términos para estar al tanto de las actualizaciones.</p>
                </div>
                <div className="py-5">
                    <h2 className="text-base font-bold">7. Contacto</h2>
                    <p className="text-sm">Si tiene alguna pregunta o comentario sobre estos Términos y Condiciones, por favor contáctenos en logistica@natesexport.com.</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}