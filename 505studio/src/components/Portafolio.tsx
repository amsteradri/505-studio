'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

const Portafolio = () => {
  const t = useTranslations('portfolio');

  const proyectos = [
    {
      title: t('projects.0.title'),
      desc: t('projects.0.desc'),
      images: ['/portafolio/online1.webp', '/portafolio/online2.jpeg', "/portafolio/online3.jpeg"],
    },
    {
      title: t('projects.1.title'),
      desc: t('projects.1.desc'),
      images: ['/portafolio/starbucks.jpg', '/portafolio/starbucks2.png', "/portafolio/starbucks3.jpg"],
    },
    {
      title: t('projects.2.title'),
      desc: t('projects.2.desc'),
      images: ['/portafolio/branding1.jpg', '/portafolio/branding2.jpeg', '/portafolio/branding3.jpeg'],
    },
    {
      title: t('projects.0.title'),
      desc: t('projects.0.desc'),
      images: ['/portafolio/online1.webp', '/portafolio/online2.jpeg', "/portafolio/online3.jpeg"],
    },
    {
      title: t('projects.1.title'),
      desc: t('projects.1.desc'),
      images: ['/portafolio/starbucks.jpg', '/portafolio/starbucks2.png', "/portafolio/starbucks3.jpg"],
    },
    {
      title: t('projects.2.title'),
      desc: t('projects.2.desc'),
      images: ['/portafolio/branding1.jpg', '/portafolio/branding2.jpeg', '/portafolio/branding3.jpeg'],
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section id="portafolio" className="py-24 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          {t('titleStart')} <span className="text-blue-600">{t('titleAccent')}</span>
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {proyectos.map(({ title, desc, images }, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 text-left hover:-translate-y-1"
            >
              <Slider {...sliderSettings}>
                {images.map((src, index) => (
                  <div key={index} className="relative h-56 w-full">
                    <Image
                      src={src}
                      alt={`${title} imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
