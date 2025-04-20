'use client'

import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = router

  const toggleLocale = (newLocale: string) => {
    if (locale === newLocale) return
    router.replace(router.asPath, undefined, { locale: newLocale })
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex w-32 bg-[#212121]/90 backdrop-blur-md border border-[#424242] rounded-full shadow-lg">
        <div
          data-id="es"
          onClick={() => toggleLocale('es')}
          className={`cursor-pointer flex justify-center items-center w-1/2 text-sm text-[#F5F5F5] py-1 rounded-full transition-all duration-300 ease-in-out hover:bg-[#333] ${locale === 'es' ? 'bg-[#333]' : ''}`}
        >
          <img
            src="https://flagcdn.com/w40/es.png" // Bandera de España
            alt="ES"
            className="w-4 h-3 mr-2"
          />
          ES
        </div>

        <div
          data-id="en"
          onClick={() => toggleLocale('en')}
          className={`cursor-pointer flex justify-center items-center w-1/2 text-sm text-[#F5F5F5] py-1 rounded-full transition-all duration-300 ease-in-out hover:bg-[#333] ${locale === 'en' ? 'bg-[#333]' : ''}`}
        >
          <img
            src="https://flagcdn.com/w40/gb.png" // Bandera del Reino Unido
            alt="EN"
            className="w-4 h-3 mr-2"
          />
          EN
        </div>
      </div>
    </div>
  )
}
