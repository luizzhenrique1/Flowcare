import React from 'react';
import FilhaMae from '../assets/filhaMae.jpg';
import CuidadoDiario from '../assets/cuidadoDiário.jpg';
import HigienePessoal from '../assets/higienePessoal.jpg';
import Ciclo from '../assets/cicloMenstrual.jpg';

export const Articles = () => {
  return (
    <section id="articles">
    <div className='overflow-hidden font-poppins' >
      {/* WaveTop */}
      <div className='m-0 p-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block">
          <path
            fill="#D181F1"
            fillOpacity="1"
            d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,229.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Título */}
      <div className='pb-12 bg-[#D181F1] -mt-1'>
        <h1 className="text-[#fafafa] text-[40px] text-center font-bold">Artigos</h1>
      </div>

      {/* Imagens e Texto-Artigos */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center bg-[#D181F1] -mt-1'>
        {/* 1 */}
        <div className='flex flex-col items-center'>
          <div className='max-w-none w-64 h-64 rounded-full overflow-hidden mb-4 transition-transform transform hover:scale-110'>
            <img
              src={HigienePessoal}
              className="shadow-lg w-full h-full object-cover"
              alt="Imagem de Higiene Pessoal"
            />
          </div>
          <p className="mt-6 text-xl text-white z-10">Higiene Pessoal</p>
        </div>

        {/* 2 */}
        <div className='flex flex-col items-center'>
          <div className='max-w-none w-64 h-64 rounded-full overflow-hidden mb-4 transition-transform transform hover:scale-110'>
            <img
              src={CuidadoDiario}
              className="shadow-lg w-full h-full object-cover"
              alt="Imagem de Cuidado Diário"
            />
          </div>
          <p className="mt-4 text-xl text-white z-10">Cuidado Diário</p>
        </div>

        {/* 3 */}
        <div className='flex flex-col items-center'>
          <div className='max-w-none w-64 h-64 rounded-full overflow-hidden mb-4 transition-transform transform hover:scale-110'>
            <img
              src={Ciclo}
              className="shadow-lg w-full h-full object-cover"
              alt="Imagem do Ciclo Menstrual"
            />
          </div>
          <p className="mt-4 text-xl text-white z-10">Ciclo Menstrual</p>
        </div>

        {/* 4 */}
        <div className='flex flex-col items-center'>
          <div className='max-w-none w-64 h-64 rounded-full overflow-hidden mb-4 transition-transform transform hover:scale-110'>
            <img
              src={FilhaMae}
              className="shadow-lg w-full h-full object-cover"
              alt="Imagem da Mãe e Filha"
            />
          </div>
          <p className="mt-4 text-xl text-white z-10">Todas as Idades</p>
        </div>
      </div>

      {/* WaveBottom */}
      <div className='m-0 p-0 -mt-1 -z-10'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block">
          <path
            fill="#D181F1"
            d="M0,32L80,58.7C160,85,320,139,480,138.7C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
    </section>
  );
};

export default Articles;
