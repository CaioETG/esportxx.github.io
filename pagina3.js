document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    // Função para carregar notícias de um arquivo JSON
    async function loadNews() {
        try {
            const response = await fetch('noticias.json');
            const news = await response.json();
            displayNews(news);
        } catch (error) {
            console.error('Erro ao carregar as notícias:', error);
        }
    }

    // Função para exibir as notícias no contêiner
    function displayNews(news) {
        newsContainer.innerHTML = '';
        news.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('noticia');
            articleDiv.style.animation = 'fadeInUp 0.6s ease-out';
            articleDiv.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.link}" target="_blank">Leia mais</a>
            `;
            newsContainer.appendChild(articleDiv);
        });
    }

    // Função para filtrar notícias com base no input de busca
    function filterNews(news, query) {
        return news.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Evento de clique para o botão de busca
    searchButton.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (query) {
            const response = await fetch('noticias.json');
            const news = await response.json();
            const filteredNews = filterNews(news, query);
            displayNews(filteredNews);
        } else {
            loadNews();
        }
    });

    // Carregar as notícias ao carregar a página
    loadNews();
});
