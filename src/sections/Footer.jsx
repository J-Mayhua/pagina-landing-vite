function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-xl font-bold text-white">MiMarca</span>

                <ul className="flex gap-6 text-sm">
                    <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                    <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                    <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                </ul>

                <p className="text-sm text-gray-500">
                    © {year} Mayhua. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer
