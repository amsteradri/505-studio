import Head from 'next/head'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Portafolio from '@/components/Portafolio'
import Contacto from '@/components/Contacto'
import NavBar from '@/components/NavBar'
import Who from '@/components/Who'
import NewsletterForm from '@/components/Form'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Analytics } from "@vercel/analytics/react"

import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = (await import(`../../locales/${locale}/common.json`)).default;
  console.log('Mensajes cargados:', messages); // Verifica que las traducciones se carguen correctamente
  console.log('Idioma actual en getStaticProps:', locale); // Verifica el idioma actual
  return {
    props: {
      messages,
      locale, // Pasa el idioma actual
    },
  };
}




export default function Home() {
  return (
    <>
      <Head>
        <title>505 Studio - Agencia Creativa</title>
        <meta name="description" content="Branding, diseño web, SEO, marketing digital y más. En 505 Studio ayudamos a las marcas a destacar." />
        <meta name="keywords" content="agencia creativa, branding, diseño web, SEO, marketing digital, diseño gráfico, desarrollo web, publicidad" />
        <meta name="author" content="505 Studio" />
        <meta property="og:title" content="505 Studio - Agencia Creativa" />
        <meta property="og:description" content="Branding, diseño web, SEO y más. En 505 Studio ayudamos a las marcas a destacar con soluciones creativas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.505studio.com" />
        <meta property="og:image" content="https://www.505studio.com/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="505 Studio - Agencia Creativa" />
        <meta name="twitter:description" content="Branding, diseño web, SEO y más. En 505 Studio ayudamos a las marcas a destacar." />
        <meta name="twitter:image" content="https://www.505studio.com/images/logo.png" />
        <link rel="canonical" href="https://www.505studio.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics/>
      <LanguageSwitcher />
      <main className="font-sans">
        <NavBar />
        
        <Hero />
        <Servicios />
        <Portafolio />
        <Who/>
        <Contacto />
        <NewsletterForm />
      </main>
    </>
  )
}
