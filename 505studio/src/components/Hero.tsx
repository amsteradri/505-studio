'use client'

import { motion } from 'framer-motion'

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText"
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText"
import TextPressure from "@/blocks/TextAnimations/TextPressure/TextPressure"
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText"



const handleAnimationComplete = () => {
  console.log('Animation completed!')
}

const scrollToServicios = () => {
  const section = document.getElementById('servicios');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};


const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background con imagen + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero3.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6 max-w-4xl"
      >
        <h1
          className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Roboto VF', sans-serif", letterSpacing: '0.02em' }}
        >
          <BlurText
            text="Impulsamos tu Marca al siguiente"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[2.5rem] md:text-[3.5rem] mb-8"
          />
        </h1>

        <div style={{ position: 'relative', height: '200px', width: '100%', maxWidth: '400px', margin: '0 auto', overflow: 'hidden' }}>
          <TextPressure
            text="Nivel"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#98edf3"
            strokeColor="#ff0000"
            minFontSize={30}
            className="text-3xl"
          />
        </div>


        <ShinyText
          text="Branding estratégico, diseño visual único, desarrollo web con impacto y posicionamiento SEO."
          speed={2.5}
          className="text-2xl mb-10 leading-tight tracking-tight text-center max-w-3xl mx-auto"
        />

        {/* Botón con borde pro y scroll suave */}
        <button
          onClick={scrollToServicios}
          className="relative inline-block px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden group transition-all duration-300 focus:outline-none"
        >
          {/* Fondo animado en escala de grises metalizados */}
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#212121] via-[#757575] to-[#C0C0C0]
            bg-[length:200%_100%] bg-left group-hover:bg-right
            transition-all duration-700"
            aria-hidden="true"
          />

          {/* Glow + Borde en tono claro */}
          <span
            className="absolute inset-0 rounded-xl ring-2 ring-[#BDBDBD]/50 shadow-[0_0_10px_2px_rgba(192,192,192,0.25)] group-hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.4)] transition-all duration-500"
            aria-hidden="true"
          />

          {/* Texto con plateado suave */}
          <span className="relative text-[#F5F5F5] drop-shadow-sm font-medium tracking-wide z-10">
            Ver Servicios
          </span>
        </button>

      </motion.div>
    </section>
  )
}

export default Hero
