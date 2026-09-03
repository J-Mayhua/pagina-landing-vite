import { useState } from 'react'
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">MiMarca</span>

                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li><a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a></li>
                    <li><a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a></li>
                    <li><a href="#sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</a></li>
                    <li><a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a></li>
                </ul>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-2xl text-gray-700"
                    aria-label="Abrir menú"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
            {isMenuOpen && (
                <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 font-medium">
                    <li><a href="#inicio" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">Inicio</a></li>
                    <li><a href="#servicios" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">Servicios</a></li>
                    <li><a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">Sobre mí</a></li>
                    <li><a href="#contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">Contacto</a></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar
