import { useState } from 'react'


function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })
    const [status, setStatus] = useState('idle');

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
        setStatus('loading')

        setTimeout(() => {
            console.log('Datos enviados:', formData)
            setStatus('success')
            setFormData({ nombre: '', email: '', mensaje: '' })
        }, 1500)
    }
    return (
        <section id="contacto" className="py-24 px-6 bg-gray-50">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Hablemos de tu proyecto
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Completa el formulario y te responderé lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="mensaje"
                        placeholder="Tu mensaje"
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-600 font-medium text-center">
                            ¡Mensaje enviado con éxito! Te responderé pronto.
                        </p>
                    )}
                </form>
            </div>

        </section>
    )
}

export default Contact
