'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

const Who = () => {
  const t = useTranslations('who');

  const team = [
    {
      name: 'Eira Garcia Utrera',
      role: t('team.0.role'),
      bio: t('team.0.bio'),
      image: '/eira.jpeg',
      linkedin: 'https://www.linkedin.com/in/eira-garcia-utrera-91a226215/',
      behance: 'https://www.behance.net/eirautrera'
    },
    {
      name: 'Adrián Gutiérrez Segovia',
      role: t('team.1.role'),
      bio: t('team.1.bio'),
      image: '/adri.jpeg',
      linkedin: 'https://www.linkedin.com/in/adri%C3%A1n-gutierrez-segovia-1275a8165/',
      github: 'https://github.com/amsteradri'
    }
  ];

  return (
    <section
      id="who"
      className="relative py-28 px-6 bg-white text-[#212121]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-20"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-2xl p-10 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-gray-300 mb-6"
              />
              <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm mb-6 max-w-sm mx-auto leading-relaxed">{member.bio}</p>

              <div className="flex justify-center gap-5 text-2xl text-gray-600">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors">
                    <FaLinkedin />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#333] transition-colors">
                    <FaGithub />
                  </a>
                )}
                {member.behance && (
                  <a href={member.behance} target="_blank" rel="noopener noreferrer" className="hover:text-[#1769ff] transition-colors">
                    <FaBehance />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Who;
