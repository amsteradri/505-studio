import Head from 'next/head'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Portafolio from '@/components/Portafolio'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <>
      <Head>
        <title>505 Studio - Agencia Creativa</title>
        <meta name="description" content="Branding, diseño web, SEO y más." />
      </Head>
      <main className="font-sans">
        <Hero />
        <Servicios />
        <Portafolio />
        <Contacto />
      </main>
    </>
  )
}
