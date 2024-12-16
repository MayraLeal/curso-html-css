function adicionarTarefa() {
//Recebe valor do input do usuário
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  
  const mensagem = document.getElementById("mensagem");

//Se o valor do input for vazio então mostra uma mensagem de erro para usúrio
  if (tarefa == "") {
//Mostra mensagem de erro
  let mensagemErro = "Digite uma terefa para adicioná-la a sua lista!";
  mensagem.textContent = mensagemErro;
  mensagem.style.color = "#a34743"
} else {
//Define uma mensagem que será exibida ao usuário mensagem de tarefa adicionada com sucesso
  let mensagemSucesso = "Tarefa adicionada com sucesso!";
  mensagem.textContent = mensagemSucesso;
  mensagem.style.color = "#28a745";


//cria novo item (li) e insere na (lista ul)
  const listaTarefas = document.getElementById("listaTarefas");
  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;
  listaTarefas.appendChild(novaTarefa);
}

//limpa o input do usuário
  inputTarefa.value = "";
}