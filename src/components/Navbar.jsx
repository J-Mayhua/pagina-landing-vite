function Navbar() {
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
            </div>
        </nav>
    )
}

export default Navbar
