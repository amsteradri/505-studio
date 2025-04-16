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
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
      </div>
  
      <div className="hidden animate-shine"></div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
        <SplitText
            text="Impulsamos tu Marca al Siguiente Nivel"
            className=""
            delay={80}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
        />
        </h1>

        <ShinyText
          text="Texto con efecto brillante ✨"
          speed={4}
          className="text-4xl font-bold"
        />

        <div
          className="text-transparent bg-clip-text animate-shine text-4xl font-bold"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
            backgroundSize: '200% 100%',
            backgroundPosition: '200% center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Test Shine ✨
        </div>


        <BlurText
        text="Branding estratégico, diseño visual único, desarrollo web con impacto y posicionamiento SEO."
        delay={150}
        animateBy="words"
        direction="top"
        animationFrom={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
        animationTo={[
          { opacity: 0.5, transform: 'translate3d(0,-10px,0)' },
          { opacity: 1, transform: 'translate3d(0,0,0)' }
        ]}
        onAnimationComplete={handleAnimationComplete}
        className="text-xl mb-8 leading-tight tracking-tight mb-6 text-center flex flex-wrap justify-center gap-x-2 max-w-4xl mx-auto"
      />

        {/* <ShinyText text="Branding estratégico, diseño visual único, desarrollo web con impacto y posicionamiento SEO." disabled={false} speed={3} className='custom-class mb-4' /> */}
        <a
          href="#servicios"
          className="inline-block px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition rounded-xl shadow-lg hover:scale-105"
        >
          Ver Servicios
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
