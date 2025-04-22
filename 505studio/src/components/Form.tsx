'use client';

import { useState, useEffect } from 'react';
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

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
  const [isOpen, setIsOpen] = useState(true); // Control para mostrar u ocultar el modal
  const [isHydrated, setIsHydrated] = useState(false); // Estado para controlar la hidratación del componente

  // Verificar si ya se mostró el modal antes en el localStorage
  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (modalShown === 'true') {
      setIsOpen(false); // Si ya se mostró, no abrirlo de nuevo
    }
    setIsHydrated(true); // Después de comprobar, indicamos que el componente está hidratado
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
      setIsOpen(false); // Cierra el modal tras una suscripción exitosa
      localStorage.setItem('modalShown', 'true'); // Guarda que el modal ya fue mostrado
    } else {
      setStatus('error');
    }
  };

  const closeForm = () => {
    setIsOpen(false); // Cierra el modal cuando el usuario haga clic en la "X"
    localStorage.setItem('modalShown', 'true'); // Guarda que el modal ya fue mostrado
  };

  if (!isHydrated) {
    return null; // No renderizamos nada hasta que el componente esté hidratado
  }

  if (!isOpen) return null; // Si el modal está cerrado, no renderizamos el formulario

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-xl shadow-lg p-8 max-w-md w-full">
        {/* Botón para cerrar el formulario */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          X
        </button>

        {/* Contenido del formulario */}
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
      </div>
    </div>
  );
}
