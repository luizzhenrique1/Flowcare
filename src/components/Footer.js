import React from "react";
import Logo from "../assets/logo.png";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import PolicyIcon from "@mui/icons-material/Policy";

export const Footer = () => {
  // Função para rolar até a seção 
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", 
      });
    }
  };

  return (
    <footer id="Footer" className="bg-[#883683] px-4 py-16 text-white font-poppins">
      {/* Linha Superior */}
      <div className="bg-white w-[90%] h-1 mx-auto mt-6 mb-12"></div>

      {/* Logo e Título */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:ml-[5%] md:mb-[120px] justify-between">
        <div className="flex items-center space-x-4 mb-8 md:mb-0">
          <img src={Logo} className="w-10 h-10" alt="logoFooter" />
          <h2 className="text-2xl font-bold">FlowCare</h2>
        </div>
      </div>

      {/* Listas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {/* Produtos */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Produtos</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("products")}>
              Absorvente
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("products")}>
              Absorvente Interno
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("products")}>
              Proteção Diária
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("products")}>
              Higiene Íntima
            </li>
          </ul>
        </div>

        {/* Artigos */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Artigos</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("articles")}>
              Higiene Pessoal
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("articles")}>
              Cuidado Diário
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("articles")}>
              Ciclo Menstrual
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("articles")}>
              Todas as Idades
            </li>
          </ul>
        </div>

        {/* Sobre Nós */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Sobre Nós</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("about")}>
              Nossos Ideais
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("work")}>
              Nosso Objetivo
            </li>
            <li className="hover:underline hover:cursor-pointer" onClick={() => scrollToSection("contact")}>
              Fale Conosco
            </li>
          </ul>
        </div>

        {/* Outros */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Outros</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">Definições de Cookies</li>
            <li className="flex justify-between items-center hover:underline hover:cursor-pointer">
              <span>Política de Privacidade</span>
              <PolicyIcon />
            </li>
            <li className="flex justify-between items-center hover:underline hover:cursor-pointer">
              <span>Gerenciar Privacidade</span>
              <PrivacyTipIcon />
            </li>
            <li className="flex justify-between items-center hover:underline hover:cursor-pointer">
              <span>Valores de Privacidade</span>
              <SecurityIcon />
            </li>
            <li className="flex justify-between items-center hover:underline hover:cursor-pointer">
              <span>Termos e Condições</span>
              <GavelIcon />
            </li>
          </ul>
        </div>
      </div>

      {/* Linha Inferior */}
      <div className="bg-white w-[90%] h-1 mx-auto mt-16"></div>
    </footer>
  );
};

export default Footer;
