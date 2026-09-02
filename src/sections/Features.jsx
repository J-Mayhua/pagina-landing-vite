import { features } from '../data/features'
import FeatureCard from '../components/FeatureCard'

function Features() {
    return (
        <section id="servicios" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                    ¿Qué ofrecemos?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
