// Lógica de negócio, exemplo de manipulação de eventos
document.addEventListener('DOMContentLoaded', function() {
    // Recuperar os elementos do DOM
    var seriesSection = document.getElementById('series');
    var filmesSection = document.getElementById('filmes');
  
    // Exemplo de manipulação de eventos
    seriesSection.addEventListener('click', function() {
      console.log('Séries clicadas');
      // Lógica para exibir as séries disponíveis
    });
  
    filmesSection.addEventListener('click', function() {
      console.log('Filmes clicados');
      // Lógica para exibir os filmes disponíveis
    });
  });