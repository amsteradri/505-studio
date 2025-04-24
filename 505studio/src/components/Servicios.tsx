'use client';

import { FaPaintBrush, FaLaptopCode, FaSearch } from 'react-icons/fa';
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

const Servicios = () => {
  const t = useTranslations('services');

  const servicios = [
    {
      icon: <FaPaintBrush className="text-4xl text-blue-500 mb-4" />,
      title: t('branding.title'),
      desc: t('branding.desc'),
    },
    {
      icon: <FaLaptopCode className="text-4xl text-cyan-500 mb-4" />,
      title: t('web.title'),
      desc: t('web.desc'),
    },
    {
      icon: <FaSearch className="text-4xl text-emerald-500 mb-4" />,
      title: t('seo.title'),
      desc: t('seo.desc'),
    },
    {
      icon: <FaPaintBrush className="text-4xl text-purple-500 mb-4" />,
      title: t('graphic.title'),
      desc: t('graphic.desc'),
    },
    {
      icon: <FaLaptopCode className="text-4xl text-orange-500 mb-4" />,
      title: t('apps.title'),
      desc: t('apps.desc'),
    },
    {
      icon: <FaSearch className="text-4xl text-red-500 mb-4" />,
      title: t('marketing.title'),
      desc: t('marketing.desc'),
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const directions = [
    { x: -100, y: 40, rotate: -5 },
    { x: 100, y: 40, rotate: 5 },
    { x: 0, y: 100, rotate: 7 },
    { x: 0, y: -100, rotate: -7 },
    { x: -70, y: -70, rotate: 10 },
    { x: 70, y: 70, rotate: -10 },
  ];

  // Calculamos las transformaciones fuera del callback
  const transforms = directions.map((dir) => ({
    x: useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.85], [dir.x, 0, 0, dir.x]),
    y: useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.85], [dir.y, 0, 0, dir.y]),
    rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.85], [dir.rotate, 0, 0, dir.rotate]),
    opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.9], [0, 1, 1, 0]),
  }));

  return (
    <section
      id="servicios"
      className="py-32 px-6 bg-white text-gray-900"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          {t('titleStart')} <GradientText colors={["#c0c0c0", "#a9a9a9", "#e0e0e0", "#b0b0b0", "#d3d3d3"]}>{t('titleAccent')}</GradientText>
        </h2>

        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {servicios.map(({ icon, title, desc }, i) => {
            const { x, y, rotate, opacity } = transforms[i % transforms.length];

            return (
              <motion.div
                key={i}
                style={{ x, y, rotate, opacity }}
                transition={{ 
                  type: "spring",
                  duration: (transitionEnd: number) => {
                    return transitionEnd !== 0 ? 0.6 : 1.2;
                  },
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.07
                }}
                className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 text-left hover:-translate-y-1"
              >
                {icon}
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;