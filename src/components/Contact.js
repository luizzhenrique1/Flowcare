import React, { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!email || !name || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    alert(`Obrigado pelo contato, ${name}!`);
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <section id="contact">
      <div>
        <div className="bg-[#CC7FD3] font-poppins flex flex-col justify-center text-center items-center p-6 mt-8 md:mt-0 space-y-6 relative">
          <div>
            <h1 className="text-black text-[20px] md:text-[30px] font-semibold">
              Fale Conosco
            </h1>
            <p className="text-white text-lg md:text-xl">
              Preencha os campos abaixo para entrar em contato conosco
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-[700px]">
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#D9D9D9] rounded-2xl p-4 w-full max-w-[500px] h-[45px] text-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#B02085]"
            />
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#D9D9D9] rounded-2xl p-4 w-full max-w-[500px] h-[45px] text-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#B02085]"
            />
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-[700px] '>
            <textarea
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#D9D9D9] rounded-2xl p-4 w-full max-w-[600px] h-[100px] text-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#B02085]"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#B02085] text-white rounded-2xl ml-6 px-6 py-2 h-[45px] shadow-md transition-transform transform hover:scale-110"
            >
              Enviar
            </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
