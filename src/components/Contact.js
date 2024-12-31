import React, { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = () => {
    if (!email || !name || !message || !phone || !subject) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    alert(`Obrigado pelo contato, ${name}!`);
    setEmail('');
    setName('');
    setMessage('');
    setPhone('');
    setSubject('');
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-r from-[#D17AD7] to-[#B02085]">
      <div className="container mx-auto px-4">
        <div className="bg-white text-center p-8 rounded-xl shadow-lg">
          <h1 className="text-[#2E2E2E] text-3xl md:text-4xl font-semibold mb-4">
            Fale Conosco
          </h1>
          <p className="text-[#555] text-lg md:text-xl mb-8">
            Preencha os campos abaixo para entrar em contato conosco. Responderemos o mais rápido possível!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#F4F4F4] rounded-2xl p-4 w-full h-[50px] text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B02085] transition-all"
              />
            </div>

            <div className="w-full">
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#F4F4F4] rounded-2xl p-4 w-full h-[50px] text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B02085] transition-all"
              />
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-[#F4F4F4] rounded-2xl p-4 w-full h-[50px] text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B02085] transition-all"
              />
            </div>

            <div className="w-full">
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#F4F4F4] rounded-2xl p-4 w-full h-[50px] text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B02085] transition-all"
              >
                <option value="" disabled>Selecione o assunto</option>
                <option value="Suporte">Suporte</option>
                <option value="Vendas">Vendas</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          <div className="w-full mt-6">
            <textarea
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#F4F4F4] rounded-2xl p-4 w-full h-[120px] text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B02085] transition-all"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-[#B02085] text-white rounded-2xl px-8 py-3 h-[50px] shadow-lg transition-transform transform hover:scale-110 hover:bg-[#9A0D6C]"
            >
              Enviar
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#555] text-sm">
              Ao clicar em "Enviar", você concorda com nossa <a href="#" className="text-[#B02085]">Política de Privacidade</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
