import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'], // Idiomas soportados
    defaultLocale: 'es',   // Idioma por defecto
  },
};

export default nextConfig;
