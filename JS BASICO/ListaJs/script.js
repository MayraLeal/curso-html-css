function adicionarTarefa() {
//Recebe valor do input do usuário
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  
  const mensagem = document.getElementById("mensagem");

//Recebe o texto e a cor
  const mostraMensagem = (texto, cor) => { 
    mensagem.textContent = texto;
    mensagem.style.color = cor;
//limpa o input do usuário
    inputTarefa.value = "";
}

  if (tarefa === "") {
//mostre uma mensagem de erro
    mostraMensagem("Digite uma terefa para adicioná-la a sua lista!", "#a34743");
  } else {
//mensagem de tarefa adicionada com sucesso
    mostraMensagem("Tarefa adicionada com sucesso!", "#28a745");

//cria novo item (li) e insere na (lista ul)
  const listaTarefas = document.getElementById("listaTarefas");
  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;
  listaTarefas.appendChild(novaTarefa);
}}