'use client'

import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = router

  const toggleLocale = () => {
    if (!locale) return // Asegúrate de que locale no sea undefined
    const newLocale = locale === 'es' ? 'en' : 'es'
    // Cambia el idioma y recarga la página en el mismo path
    router.replace(router.asPath, undefined, { locale: newLocale })
  }

  return (
    <button
      onClick={toggleLocale}
      className="fixed top-6 right-6 z-50 text-sm px-4 py-2 bg-[#212121] text-white rounded-full shadow hover:bg-[#333]"
    >
      {locale ? locale.toUpperCase() : 'N/A'} {/* Muestra el idioma actual o 'N/A' si no está definido */}
    </button>
  )
}
