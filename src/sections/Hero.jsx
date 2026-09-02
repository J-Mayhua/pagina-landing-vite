function Hero() {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gray-50 px-6 pt-20">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Impulsa tu negocio con presencia digital
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600">
                    Diseño y desarrollo de sitios web modernos, rápidos y enfocados en resultados reales.
                </p>


                <a href="#contacto"
                    className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Contáctame
                </a>
            </div>
        </section>
    )
}

export default Hero
