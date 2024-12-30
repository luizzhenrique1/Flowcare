import React from 'react';
import Absorvente from '../assets/absorvente.jpg';
import AbsorventeInterno from '../assets/absorventeInterno.jpg';
import ProtecaoDiaria from '../assets/protecaoDiaria.jpg';
import HigieneIntima from '../assets/higieneIntima.jpg';

export const Products = () => {
  return (
    <section id="products">
    <div  className="px-4 lg:px-12 pb-32 font-poppins">
      <h1 className="text-[#B02085] text-[28px] md:text-[40px] text-center font-bold mb-16">Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {/* Card 1 */}
        <div className="w-full max-w-[90%] sm:max-w-[330px] lg:max-w-[350px] h-auto rounded-2xl flex flex-col justify-end mb-2 transition-transform transform hover:scale-105">
          <img
            src={Absorvente}
            className="w-full h-[290px] rounded-t-2xl object-cover"
            alt="foto de absorvente"
          />
          <div className="bg-[#B281E5] h-[140px] space-y-2 rounded-b-2xl flex flex-col justify-center items-center">
            <p className="font-semibold text-lg sm:text-xl">Absorvente</p>
            <button className="bg-white w-[120px] h-[40px] rounded-3xl text-sm sm:text-base">Veja Mais</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[90%] sm:max-w-[330px] lg:max-w-[350px] h-auto rounded-2xl flex flex-col justify-end mb-2 transition-transform transform hover:scale-105">
          <img
            src={AbsorventeInterno}
            className="w-full h-[290px] rounded-t-2xl object-cover"
            alt="foto de absorvente interno"
          />
          <div className="bg-[#B281E5] h-[140px] space-y-2 rounded-b-2xl flex flex-col justify-center items-center">
            <p className="font-semibold text-lg sm:text-xl">Absorvente Interno</p>
            <button className="bg-white w-[120px] h-[40px] rounded-3xl text-sm sm:text-base">Veja Mais</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-[90%] sm:max-w-[330px] lg:max-w-[350px] h-auto rounded-2xl flex flex-col justify-end mb-2 transition-transform transform hover:scale-105">
          <img
            src={ProtecaoDiaria}
            className="w-full h-[290px] rounded-t-2xl object-cover"
            alt="foto de proteção diária"
          />
          <div className="bg-[#B281E5] h-[140px] space-y-2 rounded-b-2xl flex flex-col justify-center items-center">
            <p className="font-semibold text-lg sm:text-xl">Proteção Diária</p>
            <button className="bg-white w-[120px] h-[40px] rounded-3xl text-sm sm:text-base">Veja Mais</button>
          </div>
        </div>

         {/* Card 4 */}
         <div className="w-full max-w-[90%] sm:max-w-[330px] lg:max-w-[350px] h-auto rounded-2xl flex flex-col justify-end mb-2 transition-transform transform hover:scale-105">
          <img
            src={HigieneIntima}
            className="w-full h-[290px] rounded-t-2xl object-cover"
            alt="foto de equipamentos de higiene intima"
          />
          <div className="bg-[#B281E5] h-[140px] space-y-2 rounded-b-2xl flex flex-col justify-center items-center">
            <p className="font-semibold text-lg sm:text-xl">Higiene Intíma</p>
            <button className="bg-white w-[120px] h-[40px] rounded-3xl text-sm sm:text-base">Veja Mais</button>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
};

export default Products;
