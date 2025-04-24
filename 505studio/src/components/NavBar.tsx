'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import AnimatedSVG from '@/components/AnimatedSVG'

const Navbar = () => {
  const t = useTranslations()

  const navItems = [
    { id: 'hero', label: t('navbar.inicio') },
    { id: 'servicios', label: t('navbar.servicios') },
    { id: 'portafolio', label: t('navbar.portafolio') },
    { id: 'who', label: t('navbar.who') },
    { id: 'contacto', label: t('navbar.contacto') }
  ]

  const [active, setActive] = useState('hero')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [menuOpen, setMenuOpen] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = navItems[0].id
      let closestOffset = Infinity
      
      for (const item of navItems) {
        const section = document.getElementById(item.id)
        if (section) {
          const offset = Math.abs(section.getBoundingClientRect().top)
          if (offset < closestOffset) {
            closestOffset = offset
            closestSection = item.id
          }
        }
      }
  
      if (closestSection !== active) {
        setActive(closestSection)
        updateIndicator(closestSection)
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])
  

  useEffect(() => {
    updateIndicator(active)
    const resizeObserver = new ResizeObserver(() => updateIndicator(active))
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [active])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    setTimeout(() => {
      setActive(id)
      updateIndicator(id)
      setMenuOpen(false)
    }, 600)
  }

  return (
    <>
      {/* Mobile Hamburger Button y Logo */}
      <div className="md:hidden fixed top-4 left-4 z-50 flex items-center gap-3">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="text-[#F5F5F5] bg-[#212121]/90 p-2 rounded-md border border-[#424242] shadow-md"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <motion.img
          src="/505 STUDIO-04.svg"
          alt="505 Studio Logo"
          className="h-6 w-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center">
        <motion.nav
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex mt-4 items-center gap-4 w-fit bg-[#212121]/90 backdrop-blur-md border border-[#424242] rounded-full shadow-lg py-3 relative"
        >
          {/* Logo en la navbar */}
          <motion.img
            src="/505 STUDIO-04.svg"
            alt="505 Studio Logo"
            className="absolute left-0 -translate-x-full h-30 w-auto hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <ul
            ref={containerRef}
            className="relative flex items-center space-x-6 px-6 py-2 text-[#F5F5F5] text-sm font-medium"
          >
            <motion.div
              className="absolute bottom-0 h-[2px] rounded-full bg-[#C0C0C0]"
              animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
            {/* Resto de items */}
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
      </div>
    </>
  )
}

export default Navbar
