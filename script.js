// CONFIGURAÇÕES: confirme os dados com a empresa antes de publicar.
const config = {
  telefone: '5555984245373', // DDI + DDD + número, sem espaços
  instagram: '', // Exemplo: 'https://www.instagram.com/perfil_da_empresa/'
  mensagem: 'Olá! Gostaria de saber mais sobre o serviço de desentupimento e solicitar um orçamento.'
};
const whatsapp = `https://wa.me/${config.telefone}?text=${encodeURIComponent(config.mensagem)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsapp;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('[data-phone]').forEach(link => {
  link.href = `tel:+${config.telefone}`;
});
document.querySelectorAll('[data-instagram]').forEach(link => {
  if (config.instagram) {
    link.href = config.instagram;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#instagram-notice';
    link.addEventListener('click', () => {
      document.getElementById('instagram-notice').hidden = false;
    });
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
