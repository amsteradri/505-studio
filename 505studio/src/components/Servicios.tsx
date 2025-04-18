'use client'

import { motion } from 'framer-motion'
import { Paintbrush, MonitorSmartphone, SearchCheck } from 'lucide-react'

const services = [
  {
    title: 'Branding & Logo',
    description: 'Creamos identidades visuales únicas que reflejan tu esencia de marca y generan reconocimiento.',
    icon: <Paintbrush className="w-10 h-10 text-blue-500" />,
  },
  {
    title: 'Diseño Web',
    description: 'Desarrollamos sitios web modernos, rápidos y responsivos centrados en conversión y experiencia de usuario.',
    icon: <MonitorSmartphone className="w-10 h-10 text-emerald-500" />,
  },
  {
    title: 'SEO & Optimización',
    description: 'Mejoramos tu posicionamiento en buscadores con estrategias SEO eficaces y contenido optimizado.',
    icon: <SearchCheck className="w-10 h-10 text-cyan-500" />,
  },
]

const Servicios = () => {
  return (
    <section id="servicios" className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 mb-14"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow group-hover:scale-110 transition">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
