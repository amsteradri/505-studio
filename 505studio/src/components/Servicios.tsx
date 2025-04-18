'use client'

import { FaPaintBrush, FaLaptopCode, FaSearch } from 'react-icons/fa'

const servicios = [
  {
    icon: <FaPaintBrush className="text-4xl text-blue-500 mb-4" />,
    title: 'Branding & Logo',
    desc: 'Creamos identidades visuales memorables que conectan emocionalmente con tu audiencia.',
  },
  {
    icon: <FaLaptopCode className="text-4xl text-cyan-500 mb-4" />,
    title: 'Diseño Web',
    desc: 'Landing pages modernas, ultra responsivas y diseñadas para convertir visitantes en clientes.',
  },
  {
    icon: <FaSearch className="text-4xl text-emerald-500 mb-4" />,
    title: 'SEO & Optimización',
    desc: 'Mejoramos tu visibilidad orgánica en Google con estrategias SEO que realmente funcionan.',
  },
  {
    icon: <FaPaintBrush className="text-4xl text-purple-500 mb-4" />,
    title: 'Diseño Gráfico',
    desc: 'Diseñamos materiales visuales impactantes que refuerzan la identidad de tu marca.',
  },
  {
    icon: <FaLaptopCode className="text-4xl text-orange-500 mb-4" />,
    title: 'Desarrollo de Apps',
    desc: 'Creamos aplicaciones móviles intuitivas y funcionales para iOS y Android.',
  },
  {
    icon: <FaSearch className="text-4xl text-red-500 mb-4" />,
    title: 'Marketing Digital',
    desc: 'Estrategias de marketing digital personalizadas para maximizar tu alcance y conversión.',
  },
]

const Servicios = () => (
  <section
    id="servicios"
    className="py-24 px-6 bg-white text-gray-900"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
        Nuestros <span className="text-blue-600">Servicios</span>
      </h2>
      <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
        Soluciones creativas, estratégicas y a medida para posicionar tu marca con fuerza en el mercado.
      </p>
      <div className="grid md:grid-cols-3 gap-12">
        {servicios.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 text-left hover:-translate-y-1"
          >
            {icon}
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Servicios
