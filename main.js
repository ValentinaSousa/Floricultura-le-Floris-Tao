document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Animação do Título
        const titulo = document.querySelector('.apresentacao__conteudo__titulo');
        titulo.classList.remove("apresentacao__conteudo--escondido");

        // Animação da Imagem
        const imagem = document.querySelector('.apresentacao__imagem');
        imagem.classList.add('animar-entrada');
    }, 100); // Atraso de 100 milissegundos
});