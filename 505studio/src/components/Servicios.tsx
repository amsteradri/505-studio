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

  // Transformaciones definidas por separado
  const transforms = [
    {
      x: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-100, 0, 0, -100]),
      y: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [40, 0, 0, 40]),
      rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-5, 0, 0, -5]),
      opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.92, 1], [0, 1, 1, 0]),
    },
    {
      x: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [100, 0, 0, 100]),
      y: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [40, 0, 0, 40]),
      rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [5, 0, 0, 5]),
      opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.92, 1], [0, 1, 1, 0]),
    },
    {
      x: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [0, 0, 0, 0]),
      y: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [100, 0, 0, 100]),
      rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [7, 0, 0, 7]),
      opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.92, 1], [0, 1, 1, 0]),
    },
    {
      x: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [0, 0, 0, 0]),
      y: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-100, 0, 0, -100]),
      rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-7, 0, 0, -7]),
      opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.92, 1], [0, 1, 1, 0]),
    },
    {
      x: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-70, 0, 0, -70]),
      y: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-70, 0, 0, -70]),
      rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [10, 0, 0, 10]),
      opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.92, 1], [0, 1, 1, 0]),
    },
    {
      x: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [70, 0, 0, 70]),
      y: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [70, 0, 0, 70]),
      rotate: useTransform(scrollYProgress, [0.1, 0.35, 0.85, 0.98], [-10, 0, 0, -10]),
      opacity: useTransform(scrollYProgress, [0.05, 0.25, 0.92, 1], [0, 1, 1, 0]),
    },
  ];

  return (
    <section
      id="servicios"
      className="py-32 px-6 bg-white text-gray-900"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          {t('titleStart')}{' '}
          <GradientText colors={["#c0c0c0", "#a9a9a9", "#e0e0e0", "#b0b0b0", "#d3d3d3"]}>
            {t('titleAccent')}
          </GradientText>
        </h2>

        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {servicios.map(({ icon, title, desc }, i) => {
            const { x, y, rotate, opacity } = transforms[i];
            return (
              <motion.div
                key={i}
                style={{ x, y, rotate, opacity }}
                transition={{
                  type: "tween",
                  ease: [0.25, 1, 0.5, 1],
                  duration: 0.6,
                  delay: i * 0.06,
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
