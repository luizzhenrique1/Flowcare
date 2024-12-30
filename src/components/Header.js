import React from 'react'
import Navbar from './Navbar'


export const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", 
      });
    }
  };

  return (
    <header className='font-poppins'>
      <div className="bg-[#883683] text-white text-xs items-center justify-end pr-20 p-2.5 space-x-5 flex">
        <h1 className='hover:cursor-pointer hover:underline' onClick={() => scrollToSection("contact")}> Cadastrar-se </h1>
        <h1 className='hover:cursor-pointer hover:underline'>Entrar</h1>
      </div>
      <Navbar />
    </header>
  );
}


export default Header;