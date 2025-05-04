import "@/styles/globals.css";
import "@/styles/ShinyText.css";
import "@/styles/GradientText.css";
import { IntlProvider } from 'next-intl';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedCursor from '@/components/AnimatedCursor';

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const locale = pageProps.locale || 'es';
  const timeZone = 'Europe/Madrid';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1000);
  }, []);

  return (
    <SessionProvider session={session}>
      <IntlProvider messages={pageProps.messages || {}} locale={locale} timeZone={timeZone}>
        {!isMobile && <AnimatedCursor />}
        <Component {...pageProps} />
      </IntlProvider>
    </SessionProvider>
  );
}
