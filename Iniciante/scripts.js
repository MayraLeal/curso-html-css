document.getElementById('meuBotao').addEventListener('click', function(event) {
  alert("Botão clicado!");
  console.log(event.type); // Mostra o tipo do evento no console, que será "click"
  console.log(event.target); // Mostra o elemento que disparou o evento, que será o botão
});