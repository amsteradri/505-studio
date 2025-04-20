'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'portafolio', label: 'Portafolio' },
  { id: 'who', label: 'Who we are' },
  { id: 'contacto', label: 'Contacto' }
]

const Navbar = () => {
  const [active, setActive] = useState('hero')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const containerRef = useRef<HTMLUListElement>(null)

  const updateIndicator = (id: string) => {
    if (!containerRef.current) return
    const currentItem = containerRef.current.querySelector(
      `[data-id="${id}"]`
    ) as HTMLLIElement | null

    if (currentItem) {
      const { offsetLeft, offsetWidth } = currentItem
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
    }
  }

  // Scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 4
      let current = active

      for (const item of navItems) {
        const section = document.getElementById(item.id)
        if (section) {
          const { top, bottom } = section.getBoundingClientRect()
          if (top <= window.innerHeight / 2 && bottom >= 100) {
            current = item.id
            break
          }
        }
      }

      if (current !== active) {
        setActive(current)
        updateIndicator(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  useEffect(() => {
    updateIndicator(active)

    // En caso de cambio de tamaño del navegador
    const resizeObserver = new ResizeObserver(() => updateIndicator(active))
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [active])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Esperamos a que termine el scroll antes de actualizar el estado (evita tirones)
    setTimeout(() => {
      setActive(id)
      updateIndicator(id)
    }, 600) // Tiempo similar al scrollIntoView suave
  }

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit px-6 py-3 bg-[#212121]/90 backdrop-blur-md border border-[#424242] rounded-full shadow-lg"
    >
      <ul
        ref={containerRef}
        className="relative flex space-x-6 px-4 py-2 text-[#F5F5F5] text-sm md:text-base font-medium"
      >
        <motion.div
          className="absolute bottom-0 h-[3px] rounded-full bg-[#C0C0C0]"
          animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />

        {navItems.map(item => (
          <li
            key={item.id}
            data-id={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer px-1 py-0.5 transition-colors duration-300 ${
              active === item.id ? 'text-[#C0C0C0]' : 'hover:text-[#BDBDBD]'
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
