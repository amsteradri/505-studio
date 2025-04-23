'use client';

import { useState, useEffect } from 'react';
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

export default function NewsletterForm() {
  const t = useTranslations('form');

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isOpen, setIsOpen] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (modalShown === 'true') {
      setIsOpen(false);
    }
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
      setIsOpen(false);
      localStorage.setItem('modalShown', 'true');
    } else {
      setStatus('error');
    }
  };

  const closeForm = () => {
    setIsOpen(false);
    localStorage.setItem('modalShown', 'true');
  };

  if (!isHydrated) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-xl shadow-lg p-8 max-w-md w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              X
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold text-center text-white mb-4">
                {t('title')}
              </h2>
              <ShinyText
                text={t('description')}
                speed={2.5}
                className="text-2xl mb-10 leading-tight tracking-tight text-center max-w-3xl mx-auto"
              />
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg border border-[#555] text-white bg-[#222] focus:outline-none focus:ring-2 focus:ring-[#99c1de] transition duration-300"
                required
              />
              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-[#f39c12] to-[#e74c3c] text-white p-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                {status === 'loading' ? t('loading') : t('submitButton')}
              </button>

              {status === 'success' && (
                <p className="mt-3 text-green-400 text-center">{t('successMessage')}</p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-red-400 text-center">{t('errorMessage')}</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
