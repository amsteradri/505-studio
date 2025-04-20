'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

const Contacto = () => {
  const t = useTranslations('contacto');

  return (
    <section id="contacto" className="relative py-20 px-6 bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          {t('title')}
        </h2>

        <form className="space-y-6 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-md border border-gray-200">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">{t('name')}</label>
            <input
              type="text"
              id="nombre"
              placeholder={t('namePlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('email')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('emailPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">{t('message')}</label>
            <textarea
              id="mensaje"
              rows={5}
              placeholder={t('messagePlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300 resize-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('submitButton')}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contacto;
