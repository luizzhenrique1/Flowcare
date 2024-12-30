import React from 'react';
import BackgroundBanner from "../assets/flowcare-banner.png";

export const Home = () => {
  return (
    <section id="Home">
    <div >

        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:space-y-0 md:mr-20 md:space-x-8 font-poppins mb-6 sm:pt-8 md:pt-28'>
          <div className='flex-1 flex justify-center md:justify-start'>
            <img src={BackgroundBanner} className='w-full max-w-[300px] md:max-w-[600] lg:max-w-[600px] h-auto' alt="backgroundImgBanner"/>
          </div>

          <div className='flex-1 flex flex-col space-y-4 md:space-y-8 text-center md:text-left'>
            <h1 className='text-[#B02085] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight'>
            Viva a vida sem preocupações
            </h1>
            <p className='text-base md:text-lg text-gray-700'>
            Viva com leveza e deixe as preocupações de lado! Aqui, você encontra inspirações, dicas práticas e conteúdos transformadores para simplificar o dia a dia, cuidar do bem-estar e aproveitar cada momento ao máximo. Descubra como equilibrar sua rotina e criar uma vida mais feliz, tranquila e cheia de significado.
            </p>
          </div>
          
        </div>
    </div>
    </section>
  )
}

export default Home;

