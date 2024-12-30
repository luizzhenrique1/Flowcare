import React from 'react';
import FHappyWomans from '../assets/fourHappyWomans.jpg';

export const Work = () => {
  return (
    <section id="work">
    <div  className="relative flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-24 md:space-y-0 md:space-x-8 bg-[#FFFFF] -mt-1 lg:-mt-16 font-poppins">
      {/* Imagem */}
      <div className="w-full md:w-3/4"> 
        <img
          src={FHappyWomans}
          className="shadow-lg w-full max-w-none md:max-w-full lg:max-w-5xl rounded-2xl mt-8 md:mt-0 h-auto z-10"
          alt="HappyWoman"
        />
      </div>

      {/* Texto */}
      <div className="bg-[#FAEAFF] p-8 rounded-2xl max-w-[90%] md:max-w-[40%] mt-8 md:mt-0">
        <h1 className="text-[#B02085] text-[35px] font-semibold">Nosso Objetivo</h1>
        <p className="text-[16px] md:text-[18px]">
          Nosso principal objetivo é inspirar você a encontrar harmonia em sua rotina. Buscamos proporcionar ferramentas que ajudem no cuidado com a saúde física e mental, promovendo uma vida mais tranquila, saudável e significativa. Estamos aqui para apoiar você em cada passo dessa jornada.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Work;
