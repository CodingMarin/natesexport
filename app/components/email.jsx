'use client'
import { useState } from "react"
import { toast } from 'sonner'

export default function sendEmail() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [surname, setSurname] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4MDA0MjQ1NSwianRpIjoiMTg1Y2M0ZTgtOWE3Ni00MjRjLWJhMTctMDJiMDZiMGJmOGE4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjgwMDQyNDU1fQ.QOzUAhskqdb_S120ACPR6Yeob8-GQyRpiNzv_Rfv718'

        try {
            const response = await fetch('https://gruwin.pythonanywhere.com/email', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify({
                    name_client: name + ' ' + surname,
                    email_client: "logistica@natesexport.com",
                    phone_client: phone,
                    email_address: email,
                    message_subject: "Correo Nuevo",
                    message_send: message
                })
            })

            setName("")
            setPhone("")
            setEmail("")
            setSurname("")
            setMessage("")

            if (response.status === 200) {
                toast.success("Datos enviados 🥳")
            } else {
                toast.error("¡Ups!, algo salio mal. 😢")
            }

        } catch (error) {
            console.error('Error:', error)
        }
    }
    return (
        <div className="w-full mx-auto py-5">
            <form onSubmit={handleSubmit}>

                <div className="py-4">
                    <label for="telefono" className="text-sm text-[#091E42] font-medium">Telefono / Correo</label>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center">
                        <input required type="tel" id="telefono" aria-describedby="helper-text-explanation" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Telefono" autoComplete="off" />
                        <input required type="email" id="email" aria-describedby="helper-text-explanation" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="example@gmail.com" autoComplete="off" />
                    </div>
                </div>

                <label for="name" className="pb-4 text-sm text-[#091E42] font-medium">Nombres / Apellidos</label>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center">
                    <input required type="text" id="name" aria-describedby="helper-text-explanation" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Nombres" autoComplete="off" />
                    <input required type="text" id="surname" aria-describedby="helper-text-explanation" value={surname} onChange={(e) => setSurname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none" placeholder="Apellidos" autoComplete="off" />
                </div>

                <div className="py-5">
                    <label for="message" className="block mb-2 text-sm font-medium text-[#091E42] ">Escribe tu solicitud aqui... *</label>
                    <textarea required id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-[#091E42] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu solicitud aquí..."></textarea>
                </div>

                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">Nunca compartiremos sus datos. Lea nuestro <a href="#" class="font-medium text-blue-600 hover:underline">Política de privacidad</a>.</p>
                <div className="mt-10">
                    <button class="lg:w-auto w-full transition duration-300  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-300 rounded-lg group bg-gradient-to-br from-green-400 to-[#00968A] group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:outline-none">
                        <span class="select-none relative px-10 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 lg:w-full">
                            Enviar
                        </span>
                    </button>
                </div>
            </form>

        </div>
    )
}