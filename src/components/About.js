import React from 'react';
import HWomans from "../assets/happyWomans.jpg";

export const About = () => {
  return (
    <section id="about">
    <div className="font-poppins relative">
      {/* Wave */}
      <div className="relative p-0 m-0 w-full h-auto -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block w-full"
        >
          <path
            fill="#F5AFF9"
            fillOpacity="1"
            d="M0,96L60,90.7C120,85,240,75,360,106.7C480,139,600,213,720,213.3C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Texto e Imagem */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-24 md:space-y-0 md:space-x-8 bg-[#F5AFF9] -mt-1 lg:-mt-16">
        <div className='space-y-2'>
          <h2 className="text-[30px] font-[500]">Sobre Nós</h2>
          <h1 className="text-[#B02085] text-[35px] font-semibold">
            Conheça quem cuida de você
          </h1>
          <p className="text-[16px] md:text-[18px]">
            Na FlowCare, acreditamos que viver bem é viver com equilíbrio e
            propósito. Oferecemos conteúdos e soluções práticas para simplificar
            a rotina e promover o bem-estar, ajudando você a aproveitar cada
            momento da vida com mais leveza. Nossa missão é apoiar você na
            jornada por uma vida mais saudável e tranquila, fornecendo as
            ferramentas necessárias para alcançar equilíbrio entre corpo e
            mente.
          </p>
        </div>
        <div>
          <img
            src={HWomans}
            className="w-full max-w-[300px] md:max-w-[3000px] lg:max-w-[2800px] rounded-2xl mt-8 md:mt-0 h-auto pt- z-10 "
            alt="Happy Womans"
          />
        </div>
      </div>

      <div className="relative p-0 m-0 w-full h-auto md:-mt-8 -z-10 -mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F5AFF9" fill-opacity="1" d="M0,32L80,37.3C160,43,320,53,480,85.3C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        </div>

    </div>
    </section>
  );
};

export default About;
