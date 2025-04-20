'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'

import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}

const team = [
  {
    name: 'Eira Garcia Utrera',
    role: 'Directora Creativa & Diseñadora Visual',
    bio: 'Especialista en identidad visual, UI design y branding emocional. Transformo conceptos en experiencias visuales con impacto.',
    image: '/eira.jpeg',
    linkedin: 'https://www.linkedin.com/in/eira-garcia-utrera-91a226215/',
    behance: 'https://www.behance.net/eirautrera'
  },
  {
    name: 'Adrián Gutiérrez Segovia',
    role: 'Desarrollador Full Stack',
    bio: 'Apasionado de la programación y el desarrollo de interfaces modernas que convierten.',
    image: '/adri.jpeg',
    linkedin: 'https://www.linkedin.com/in/adri%C3%A1n-gutierrez-segovia-1275a8165/',
    github: 'https://github.com/amsteradri'
  }
]

const Who = () => {
  return (
    <section
      id="who"
      className="relative py-24 px-6 bg-gradient-to-b from-[#F5F5F5] via-white to-[#F5F5F5] text-[#212121] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-16"
        >
          ¿Quiénes somos?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white border border-[#BDBDBD] rounded-2xl shadow-md p-8 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#C0C0C0] mb-6"
              />
              <h3 className="text-2xl font-semibold mb-1 text-[#212121]">{member.name}</h3>
              <p className="text-[#757575] font-medium mb-4">{member.role}</p>
              <p className="text-[#424242] text-sm mb-6 max-w-xs mx-auto">{member.bio}</p>

              <div className="flex justify-center gap-5 text-2xl text-[#424242]">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C0C0C0]">
                    <FaLinkedin />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C0C0C0]">
                    <FaGithub />
                  </a>
                )}
                {member.behance && (
                  <a href={member.behance} target="_blank" rel="noopener noreferrer" className="hover:text-[#C0C0C0]">
                    <FaBehance />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Who
