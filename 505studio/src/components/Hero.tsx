'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { useEffect, useState } from "react";

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import TextPressure from "@/blocks/TextAnimations/TextPressure/TextPressure";

import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const scrollToServicios = () => {
  const section = document.getElementById('servicios');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export function useResponsiveValue<T>(mobile: T, tablet: T, desktop: T): T {
  const [value, setValue] = useState<T>(() => getResponsiveValue(mobile, tablet, desktop));

  useEffect(() => {
    const handleResize = () => {
      setValue(getResponsiveValue(mobile, tablet, desktop));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile, tablet, desktop]);

  return value;
}

function getResponsiveValue<T>(mobile: T, tablet: T, desktop: T): T {
  if (typeof window === 'undefined') {
    // Devuelve un valor predeterminado si se ejecuta en el servidor
    return mobile;
  }

  const width = window.innerWidth;

  if (width < 640) return mobile;          // Mobile: <640px
  if (width < 1024) return tablet;         // Tablet: 640px - 1023px
  return desktop;                          // Desktop: ≥1024px
}

const Hero = () => {
  const t = useTranslations('hero');
  const sectionRef = useRef(null);
  
  // Crear animaciones basadas en scroll con un rango mucho más amplio y valores extremos
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });




  // Valores de transformación extremadamente amplificados
  // Multiplicamos los valores anteriores para que el movimiento sea muchísimo más notable
  const circle1Y = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(600, 900, 1200)]);
const circle1X = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(100, 200, 300)]);
const circle1Rotate = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(360, 540, 720)]);
const circle1Scale = useTransform(scrollYProgress, [0, 1], [1, useResponsiveValue(1.3, 1.6, 2)]);

const square1Y = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(-400, -600, -800)]);
const square1X = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(100, 150, 200)]);
const square1Rotate = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(180, 270, 360)]);
const square1Scale = useTransform(scrollYProgress, [0, 1], [1, useResponsiveValue(0.7, 0.6, 0.5)]);

const diamond1Y = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(400, 550, 700)]);
const diamond1X = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(-250, -330, -400)]);
const diamond1Rotate = useTransform(scrollYProgress, [0, 1], [45, useResponsiveValue(540, 650, 765)]);
const diamond1Scale = useTransform(scrollYProgress, [0, 1], [1, useResponsiveValue(1.3, 1.5, 1.8)]);

const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
const titleY = useTransform(scrollYProgress, [0, 0.6], [0, useResponsiveValue(150, 220, 300)]);
const titleX = useTransform(scrollYProgress, [0, 0.6], [0, useResponsiveValue(50, 75, 100)]);

const textOpacity = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.1]);
const textY = useTransform(scrollYProgress, [0.1, 0.7], [0, useResponsiveValue(250, 320, 400)]);
const textX = useTransform(scrollYProgress, [0.1, 0.7], [0, useResponsiveValue(-100, -120, -150)]);

const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.1]);
const buttonY = useTransform(scrollYProgress, [0.2, 0.8], [0, useResponsiveValue(300, 400, 500)]);
const buttonScale = useTransform(scrollYProgress, [0.2, 0.8], [1, useResponsiveValue(0.85, 0.75, 0.7)]);

const circle2Y = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(600, 750, 900)]);
const circle2X = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(300, 400, 500)]);
const circle2Scale = useTransform(scrollYProgress, [0, 1], [1, useResponsiveValue(1.8, 2.1, 2.5)]);
const circle2Rotate = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(360, 450, 540)]);

const square2Y = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(400, 550, 700)]);
const square2X = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(-400, -500, -600)]);
const square2Rotate = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(300, 375, 450)]);
const square2Scale = useTransform(scrollYProgress, [0, 1], [1, useResponsiveValue(1.4, 1.6, 1.8)]);

const triY = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(600, 800, 1000)]);
const triX = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(-150, -220, -300)]);
const triRotate = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(240, 300, 360)]);

const hexY = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(-600, -750, -900)]);
const hexX = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(200, 280, 350)]);
const hexRotate = useTransform(scrollYProgress, [0, 1], [0, useResponsiveValue(120, 150, 180)]);
const hexScale = useTransform(scrollYProgress, [0, 1], [1, useResponsiveValue(1.6, 1.9, 2.2)]);


  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Background con imagen + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero3.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Figuras geométricas decorativas - Movimiento extremo */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none hidden md:block">
        {/* Círculo original con movimiento extremo */}
        <motion.div
          className="absolute w-32 h-32 bg-[#00fff7]/10 border border-[#00fff7]/30 rounded-full"
          style={{ 
            top: '20%', 
            left: '10%',
            y: circle1Y,
            x: circle1X,
            rotate: circle1Rotate,
            scale: circle1Scale
          }}
        />
        {/* Cuadrado original con movimiento extremo */}
        <motion.div
          className="absolute w-20 h-20 bg-[#ff6ec4]/10 border border-[#ff6ec4]/30 rounded-md"
          style={{ 
            top: '60%', 
            left: '70%',
            y: square1Y,
            x: square1X,
            rotate: square1Rotate,
            scale: square1Scale
          }}
        />
        {/* Diamante original con movimiento extremo */}
        <motion.div
          className="absolute w-16 h-16 bg-[#f9f871]/10 border border-[#f9f871]/30 rotate-45"
          style={{ 
            top: '80%',  // <- aquí lo bajamos
            left: '40%',
            y: diamond1Y,
            x: diamond1X,
            rotate: diamond1Rotate,
            scale: diamond1Scale
          }}
        />

        
        {/* Figuras adicionales con movimientos extremos */}
        <motion.div
          className="absolute w-28 h-28 bg-[#3498db]/15 border border-[#3498db]/40 rounded-full"
          style={{ 
            top: '15%', 
            right: '15%',
            y: circle2Y,
            x: circle2X,
            scale: circle2Scale,
            rotate: circle2Rotate
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-[#e74c3c]/15 border border-[#e74c3c]/40 rounded-md"
          style={{ 
            bottom: '20%', 
            left: '15%',
            y: square2Y,
            x: square2X,
            rotate: square2Rotate,
            scale: square2Scale
          }}
        />
        
        {/* Triángulo (simulado con div + borde) */}
        <motion.div
          className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-[#2ecc71]/40"
          style={{ 
            top: '25%', 
            left: '25%',
            y: triY,
            x: triX,
            rotate: triRotate
          }}
        />
        
        {/* Hexágono (simulado con div + transformación) */}
        <motion.div
          className="absolute w-24 h-24 bg-[#9b59b6]/15 border border-[#9b59b6]/40"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            bottom: '10%', 
            right: '5%',
            y: hexY,
            x: hexX,
            rotate: hexRotate,
            scale: hexScale
          }}
        />
        
        {/* Más figuras para aumentar el efecto visual */}
        <motion.div
          className="absolute w-16 h-16 bg-[#1abc9c]/15 border border-[#1abc9c]/40 rounded-full"
          style={{ 
            top: '10%', 
            left: '30%',
            y: useTransform(scrollYProgress, [0, 1], [0, 600]),
            x: useTransform(scrollYProgress, [0, 1], [0, 200]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.3])
          }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-[#f39c12]/15 border border-[#f39c12]/40"
          style={{ 
            top: '45%', 
            right: '10%',
            y: useTransform(scrollYProgress, [0, 1], [0, -700]),
            x: useTransform(scrollYProgress, [0, 1], [0, -350]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 270])
          }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-[#8e44ad]/10 border border-[#8e44ad]/20 rounded-full"
          style={{ 
            bottom: '10%', 
            right: '35%',
            y: useTransform(scrollYProgress, [0, 1], [0, 800]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.8])
          }}
        />
      </div>

      {/* Contenido principal - Movimiento extremo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6 max-w-4xl"
      >
        <motion.div style={{ opacity: titleOpacity, y: titleY, x: titleX }}>
          <h1
            className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'Roboto VF', sans-serif", letterSpacing: '0.02em' }}
          >
            <BlurText
              text={t('title')}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-[2.5rem] md:text-[3.5rem] mb-8"
            />
          </h1>
        </motion.div>

        <motion.div 
          style={{ 
            opacity: textOpacity, 
            y: textY, 
            x: textX, 
            position: 'relative', 
            height: '200px', 
            width: '100%', 
            maxWidth: '400px', 
            margin: '0 auto', 
            overflow: 'hidden' 
          }}
        >
          <TextPressure
            text={t('level')}
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
        </motion.div>

        <motion.div style={{ opacity: textOpacity, y: textY, x: textX }}>
          <ShinyText
            text={t('description')}
            speed={2.5}
            className="text-2xl mb-10 leading-tight tracking-tight text-center max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Botón con borde pro y scroll suave */}
        <motion.button
          onClick={scrollToServicios}
          className="relative inline-block px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden group transition-all duration-300 focus:outline-none"
          style={{ 
            opacity: buttonOpacity, 
            y: buttonY, 
            scale: buttonScale 
          }}
        >
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#212121] via-[#757575] to-[#C0C0C0]
            bg-[length:200%_100%] bg-left group-hover:bg-right
            transition-all duration-700"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 rounded-xl ring-2 ring-[#BDBDBD]/50 shadow-[0_0_10px_2px_rgba(192,192,192,0.25)] group-hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.4)] transition-all duration-500"
            aria-hidden="true"
          />
          <span className="relative text-[#F5F5F5] drop-shadow-sm font-medium tracking-wide z-10">
            {t('cta')}
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;