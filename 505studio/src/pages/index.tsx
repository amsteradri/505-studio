import Head from 'next/head'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Portafolio from '@/components/Portafolio'
import Contacto from '@/components/Contacto'
import NavBar from '@/components/NavBar'
import Who from '@/components/Who'

export default function Home() {
  return (
    <>
      <Head>
        <title>505 Studio - Agencia Creativa</title>
        <meta name="description" content="Branding, diseño web, SEO y más." />
        
        
      </Head>
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
