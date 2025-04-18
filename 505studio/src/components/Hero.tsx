'use client'

import { motion } from 'framer-motion'
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText"
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText"
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText"



const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Background con imagen + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
      </div>
  
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6 max-w-3xl"
      >
        <h1 className="text-[12rem] md:text-[8rem] font-extrabold leading-tight tracking-tight mb-6 "
        style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em' }}>
          <BlurText
            text="Impulsamos tu Marca al Siguiente Nivel"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[4rem] md:text-[3rem] mb-8"
          />
        </h1>
        <ShinyText text="Branding estratégico, diseño visual único, desarrollo web con impacto y posicionamiento SEO." disabled={false} speed={3} className='custom-class text-xl mb-8 leading-tight tracking-tight mb-6 text-center flex flex-wrap justify-center gap-x-2 max-w-4xl mx-auto' />


                <a
          href="#servicios"
          className="relative inline-block px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden group transition-all duration-300"
        >
          {/* Fondo animado con borde profesional */}
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 
                      bg-[length:200%_100%] bg-left group-hover:bg-right 
                      transition-all duration-700"
            aria-hidden="true"
          />
          
          {/* Borde visual con efecto de glass */}
          <span
            className="absolute inset-0 rounded-xl ring-1 ring-white/20 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Contenido del botón */}
          <span className="relative text-white drop-shadow font-medium tracking-wide z-10">
            Ver Servicios
          </span>
        </a>




      </motion.div>
    </section>
  );
};

export default Hero;
