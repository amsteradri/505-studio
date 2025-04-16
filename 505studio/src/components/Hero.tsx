'use client'

import { motion } from 'framer-motion'
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText"
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText"


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

        <a
          href="#servicios"
          className="inline-block px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition rounded-xl shadow-lg hover:scale-105"
        >
          Ver Servicios
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
