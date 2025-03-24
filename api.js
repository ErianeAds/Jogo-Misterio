const BACKGROUND_CONTAINER = document.getElementById('background-container'); // Container onde o plano de fundo será alterado

// Substitua com sua chave da API Pexels
const API_KEY = 'https://www.pexels.com/search/cb%20edit%20background'; 

// Função para obter uma imagem aleatória da API Pexels
async function getRandomBackground() {
    try {
        const response = await fetch('https://www.pexels.com/search/cb%20edit%20background/' + Math.floor(Math.random() * 100) + 1, {
            method: 'GET',
            headers: {
                'Authorization': API_KEY
            }
        });

        const data = await response.json();
        const randomImage = data.photos[0].src.original; // Pega a URL da imagem

        // Altera o plano de fundo com a imagem aleatória
        BACKGROUND_CONTAINER.style.backgroundImage = `url(${randomImage})`;
        BACKGROUND_CONTAINER.style.backgroundSize = 'cover'; // Ajusta o tamanho da imagem
        BACKGROUND_CONTAINER.style.backgroundPosition = 'center'; // Centraliza a imagem
        BACKGROUND_CONTAINER.style.height = '100vh'; // A altura do plano de fundo ocupa toda a tela
    } catch (error) {
        console.error('Erro ao buscar imagem:', error);
    }
}

// Chama a função para definir o plano de fundo aleatório na primeira fase
getRandomBackground();
