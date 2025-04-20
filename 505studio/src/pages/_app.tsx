import "@/styles/globals.css";
import "@/styles/ShinyText.css";
import "@/styles/GradientText.css";
import { IntlProvider } from 'next-intl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const locale = pageProps.locale || 'es'; // Usa 'es' como idioma predeterminado
  console.log('Idioma actual:', locale); // Verifica el idioma actual
  console.log('Mensajes cargados:', pageProps.messages); // Verifica las traducciones cargadas

  return (
    <IntlProvider
      messages={pageProps.messages || {}} // Traducciones
      locale={locale} // Idioma actual
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
