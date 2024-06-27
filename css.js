// Função para realizar a pesquisa
function search() {
    var searchTerm = document.getElementById("search-input").value;
    var categoryFilter = document.getElementById("category-filter").value;
    var dateFilter = document.getElementById("date-filter").value;
    
    // Lógica para realizar a pesquisa com os termos e filtros selecionados
    
    // Exemplo de exibição dos resultados em #search-results
    document.getElementById("search-results").innerHTML = "<p>Resultados da pesquisa aqui...</p>";
}

// Evento de clique no botão de pesquisa
document.getElementById("search-button").addEventListener("click", function() {
    search();
});

// Evento de pressionar a tecla Enter no campo de pesquisa
document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter
        search();
    }
});

// Exemplo de adição de funcionalidade aos links "ler mais"
var lerMaisLinks = document.querySelectorAll("a[href^='pagina']");
lerMaisLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        var href = this.getAttribute("href");
        // Lógica para redirecionar para a página href
        console.log("Redirecionando para: " + href);
    });
}); document.getElementById('search-toggle').addEventListener('click', function() {
    document.querySelector('.search-wrapper').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('search-toggle');
    const searchWrapper = document.querySelector('.search-wrapper');

    searchToggle.addEventListener('click', function() {
        if (searchWrapper.classList.contains('show')) {
            searchWrapper.classList.remove('show');
            searchWrapper.style.maxHeight = '0';
            setTimeout(() => {
                searchWrapper.style.display = 'none';
            }, 300); // Tempo igual ao da transição CSS
        } else {
            searchWrapper.style.display = 'flex';
            setTimeout(() => {
                searchWrapper.classList.add('show');
                searchWrapper.style.maxHeight = searchWrapper.scrollHeight + 'px';
            }, 10); // Pequeno delay para permitir a transição
        }
    });
});

