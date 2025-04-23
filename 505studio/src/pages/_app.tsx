import "@/styles/globals.css";
import "@/styles/ShinyText.css";
import "@/styles/GradientText.css";
import { IntlProvider } from 'next-intl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedCursor from '@/components/AnimatedCursor';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const locale = pageProps.locale || 'es'; // Idioma predeterminado
  const timeZone = 'Europe/Madrid'; // ⚠️ Usa tu zona horaria real

  return (
    <IntlProvider
      messages={pageProps.messages || {}}
      locale={locale}
      timeZone={timeZone} // ✅ Agregá esta línea
    >
      <AnimatedCursor />
      <Component {...pageProps} />
    </IntlProvider>
  );
}
