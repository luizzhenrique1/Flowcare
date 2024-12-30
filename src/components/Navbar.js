import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import Contact from "@mui/icons-material/ContactPhone";
import Drawer from "@mui/material/Drawer";
import { HiOutlineBars3 } from "react-icons/hi2";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuOption = [
    { text: "Home", icon: <HomeIcon />, action: () => scrollToTop() },
    { text: "Sobre Nós", icon: <InfoIcon />, action: () => scrollToSection("about") },
    { text: "Objetivo", icon: <HomeWorkIcon />, action: () => scrollToSection("work") },
    { text: "Artigos", icon: <ArticleIcon />, action: () => scrollToSection("articles") },
    { text: "Produtos", icon: <ShoppingCartRoundedIcon />, action: () => scrollToSection("products") },
    { text: "Contato", icon: <Contact />, action: () => scrollToSection("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

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
    <>
      <nav
        className={`flex text-sm items-center justify-between p-2 pb-3 s w-full fixed -top-2 left-0 bg-white shadow-md z-50 transition-transform duration-300 ${
          isScrolled ? "-translate-y-0" : "translate-y-16"
        }`}
      >
        {/* Logo e título - agora com a funcionalidade de recarregar a página */}
        <div
          className="flex items-center space-x-0.5 hover:cursor-pointer pl-9 flex-shrink-0"
          onClick={scrollToTop} // Vai rolar até o topo ao clicar na logo
        >
          <p className="text-[#B02085] font-bold text-lg">FlowCare</p>
          <img className="w-10 h-10" src={Logo} alt="logo" />
        </div>

        {/* Navbar para desktop */}
        <div className="hidden md:flex items-center space-x-8 text-[#B02085] font-medium pr-12">
          {menuOption.map((item, index) => (
            <a
              key={index}
              href={`#${item.text.toLowerCase()}`}
              className="no-underline hover:underline"
              onClick={(e) => {
                e.preventDefault();
                item.action(); // Aciona a função de rolagem suave
              }}
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Botão de menu hamburguer para mobile */}
        <div className="md:hidden pr-4">
          <HiOutlineBars3
            className="text-2xl text-[#B02085] hover:cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>

        {/* Drawer (menu lateral) para mobile */}
        <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
          <div className="w-64 p-4 space-y-4">
            {menuOption.map((item, index) => (
              <a
                key={index}
                href={`#${item.text.toLowerCase()}`}
                className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => {
                  setOpenMenu(false); // Fecha o menu ao clicar
                  item.action && item.action(); // Aciona a função de rolagem suave
                }}
              >
                {item.icon}
                <span className="text-lg text-[#B02085]">{item.text}</span>
              </a>
            ))}
          </div>
        </Drawer>
      </nav>

      {/* Espaço para evitar que o conteúdo fique atrás da navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
