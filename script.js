const config = {
  telefone: '5555984245373',
  instagram: 'https://www.instagram.com/desentupidoracosta/',
  mensagem: 'Olá! Gostaria de saber mais sobre o serviço de desentupimento e solicitar um orçamento.'
};
const whatsapp = `https://wa.me/${config.telefone}?text=${encodeURIComponent(config.mensagem)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
document.querySelectorAll('[data-phone]').forEach(link => { link.href = `tel:+${config.telefone}`; });
document.querySelectorAll('[data-instagram]').forEach(link => { link.href = config.instagram; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
