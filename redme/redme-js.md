# JavaScript
JavaScript é uma linguagem de programação versátil e amplamente utilizada, principalmente no desenvolvimento web front-end. Ela permite criar interatividade em páginas web, manipular o DOM, fazer requisições assíncronas e criar aplicações completas. JavaScript é uma linguagem de tipagem dinâmica, orientada a objetos e suporta programação funcional. Com a evolução do ECMAScript, novas funcionalidades são adicionadas regularmente, melhorando a eficiência e a legibilidade do código.

### O que é o Objeto Event?
Pense evento é uma ação e cada ação gera uma reação. Pensando assim, imagine que você tem um amigo (o objeto event) que anota tudo o que acontece nesses eventos esse amigo é muito detalhista e escreve todas as informações sobre o que aconteceu. No mundo do JavaScript, esse amigo é o objeto event.

### Propriedades do Objeto Event
O objeto event contém várias propriedades que nos dão informações sobre o evento que ocorreu. Aqui estão algumas das mais comuns:

- `type:` diz qual foi o tipo do evento (click, mouseover, keyup, etc.).
- `target:` refere-se ao elemento que disparou o evento.
- `currentTarget:` semelhante ao target, mas se refere ao elemento ao qual o evento foi realmente atribuído.
- `clientX / clientY:` fornece a posição horizontal e vertical do mouse quando um evento do mouse foi disparado.
- `keyCode:` no caso de um evento de teclado, diz qual tecla foi pressionada.

### Métodos do Objeto Event
Além das propriedades, o objeto event também tem métodos (ações) que você pode usar. Dois dos mais usados são:

- `preventDefault():` impede que o comportamento padrão do evento aconteça. Por exemplo, impede que um link abra uma nova página.
- `stopPropagation():` impede que o evento continue a ser propagado. Ou seja, ele não deixa o evento "borbulhar" para os elementos pais.

### Exemplo Prático
 No arquivo  [script.js](../Iniciante/scripts.js) nas linhas 1 a 5. 

## DOM
DOM é uma representação estruturada do documento como uma árvore de objetos.
Permite que o JavaScript acesse e manipule o conteúdo, estrutura e estilo de uma página web. O DOM é crucial para criar páginas web interativas e dinâmicas. Como desenvolvedora front-end, dominar o DOM te permitirá manipular eficientemente a estrutura e o conteúdo das suas páginas.

### Principais conceitos:

- Elementos: Representam as tags HTML.
- Atributos: Propriedades dos elementos.
- Texto: Conteúdo textual dentro dos elementos.
- Nós: Qualquer objeto na árvore do DOM (elementos, atributos, texto).

### Métodos comuns para manipulação do DOM:
- `getElementById():` Seleciona um elemento pelo ID.
- `getElementsByClassName():` Seleciona elementos pela classe.
- `getElementsByTagName():` Seleciona elementos pela tag.
- `querySelector():` Seleciona o primeiro elemento que corresponde a um seletor CSS.
- `querySelectorAll():` Seleciona todos os elementos que correspondem a um seletor CSS.

### Manipulação de elementos:
- `createElement():` Cria um novo elemento.
- `appendChild():` Adiciona um elemento filho.
- `removeChild():` Remove um elemento filho.
- `innerHTML:` Obtém ou define o conteúdo HTML interno de um elemento.
- `textContent:` Obtém ou define o conteúdo de texto de um elemento.

### Manipulação de atributos:
- `setAttribute():` Define um atributo.
- `getAttribute():` Obtém o valor de um atributo.
- `removeAttribute():` Remove um atributo.

### Manipulação de estilos:
- `style:` Propriedade para acessar e modificar estilos inline.
- `classList:` Permite adicionar, remover ou alternar classes CSS.

### Eventos:
- `addEventListener():` Adiciona um ouvinte de evento a um elemento.
- `removeEventListener():` Remove um ouvinte de evento.

## Estrutura do JavaScript
Os principais elementos que compõem a estrutura do JavaScript:

### 1. **Variáveis**
As variáveis são usadas para armazenar dados. Você pode declarar variáveis usando `var`, `let` ou `const`.

```javascript
let nome = "Mayra"; // Variável que pode ser reatribuída
const idade = 25; // Variável constante
```

### 2. **Tipos de Dados**
JavaScript possui vários tipos de dados, incluindo:

- **Números**: `let numero = 10;`
- **Strings**: `let texto = "Olá, Mundo!";`
- **Booleanos**: `let ativo = true;`
- **Objetos**: `let pessoa = { nome: "Mayra", idade: 25 };`
- **Arrays**: `let frutas = ["maçã", "banana", "laranja"];`

### 3. **Operadores**
Os operadores são usados para realizar operações em variáveis e valores. Os principais tipos incluem:

- **Aritméticos**: `+`, `-`, `*`, `/`, `%`
- **Comparação**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Lógicos**: `&&`, `||`, `!`

obs.: Para saber mas [LogicadeProgramacao.md](LogicadeProgramacao.md)

### 4. **Estruturas de Controle**
As estruturas de controle permitem que você execute diferentes blocos de código com base em condições.

- **Condicionais**: `if`, `else if`, `else`, `switch`
  
```javascript
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

- **Laços**: `for`, `while`, `do...while`

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 5. **Funções**
Funções são blocos de código que podem ser reutilizados. Você pode declarar funções de forma tradicional ou usando funções anônimas e arrow functions.

```javascript
function somar(a, b) {
  return a + b;
}

const multiplicar = (a, b) => a * b;
```

### 6. **Objetos e Arrays**
JavaScript permite a criação de objetos e arrays para organizar dados.

- **Objetos**: Estruturas que contêm pares de chave-valor.

```javascript
let carro = {
  marca: "Fusca",
  ano: 1970,
  ligar: function() {
    console.log("Carro ligado");
  }
};
```

- **Arrays**: Listas ordenadas de valores.

```javascript
let numeros = [1, 2, 3, 4, 5];
```

### 7. **Eventos**
JavaScript pode interagir com eventos do DOM, como cliques e teclas pressionadas.

```javascript
document.getElementById("botao").addEventListener("click", function() {
  alert("Botão clicado!");
});
```

### 8. **Manipulação do DOM**
JavaScript permite que você manipule o Document Object Model (DOM) para alterar o conteúdo e a estrutura de uma página web.

```javascript
document.getElementById("titulo").textContent = "Novo Título";
```

### Conclusão
A estrutura do JavaScript é flexível e poderosa, permitindo a criação de aplicações web dinâmicas e interativas. Compreender esses conceitos fundamentais é essencial para qualquer desenvolvedor que deseja trabalhar com JavaScript.

Se precisar de mais detalhes sobre algum desses tópicos, é só avisar!

## O uso do `defer`

Atributo `defer` em uma tag `<script>` é usado para indicar que o script deve ser executado após o carregamento completo do documento HTML.

### O que o `defer` Faz

1. **Carregamento Assíncrono**: O script é baixado de forma assíncrona enquanto o HTML está sendo processado. Isso significa que o carregamento do script não bloqueia a renderização da página.

2. **Execução Após o Carregamento**: O script é executado apenas após o documento HTML ter sido completamente carregado e analisado, o que garante que todos os elementos do DOM estejam disponíveis.

### Como Usar
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página</title>
    <script src="script.js" defer></script> <!-- Script com defer -->
</head>
<body>
    <h1>Bem-vindo!</h1>
</body>
</html>
```