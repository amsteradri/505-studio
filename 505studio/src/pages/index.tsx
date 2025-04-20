import Head from 'next/head'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Portafolio from '@/components/Portafolio'
import Contacto from '@/components/Contacto'
import NavBar from '@/components/NavBar'
import Who from '@/components/Who'
import LanguageSwitcher from '@/components/LanguageSwitcher'

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
        <meta name="description" content="Branding, diseño web, SEO y más." />
        
        
      </Head>
      <LanguageSwitcher />
      <main className="font-sans">
        <NavBar />
        <Hero />
        <Servicios />
        <Portafolio />
        <Who/>
        <Contacto />
      </main>
    </>
  )
}
