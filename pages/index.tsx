/* eslint-disable @next/next/no-img-element */
import About from 'components/About';
import ContactMe from 'components/ContactMe';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import WorkExperience from 'components/WorkExperience';
import Head from 'next/head';
import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] scale-100 m-auto text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 object-fit scrollbar-thumb-[#f7ab0a]/80'>

      <Head>
        <title>Ankit&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center '>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section className="snap-start" id="projects">
        <Projects />
      </section>

      <section className="snap-start" id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/scroll.jpg"
              alt="Scroll to top"
            />
          </div>
        </footer>
      </Link>

    </div>
  );
}