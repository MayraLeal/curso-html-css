## 1. Conceitos Básicos

### Algoritmo
Um algoritmo é uma sequência bem definida de passos que leva à solução de um problema. Pode ser visualizado como uma receita de culinária, onde cada passo deve ser seguido na ordem correta para alcançar o resultado desejado. Os algoritmos podem ser expressos de várias maneiras:
- `Linguagem Natural:` Descrição em palavras simples.
- `Pseudocódigo:` Uma combinação de linguagem natural e estruturas de programação.
- `Fluxogramas:` Diagramas que representam visualmente o fluxo do algoritmo.

### Fluxo de Controle
O fluxo de controle determina como as instruções são executadas. As principais estruturas são:

- `Sequência:` As instruções são executadas uma após a outra, na ordem em que aparecem.
  
- `Seleção:` Permite que o programa tome decisões. Por exemplo, a estrutura `if` avalia uma condição e executa um bloco de código se a condição for verdadeira. Se não, pode executar outro bloco com `else`.

- `Repetição:` Estruturas que permitem executar um bloco de código várias vezes. Por exemplo, um laço `for` pode iterar sobre uma lista de números, enquanto um `while` continua até que uma condição específica não seja mais verdadeira.

## 2. Estruturas de Dados

### Variáveis
Variáveis são como caixas que armazenam dados. Cada variável tem um nome e um tipo (como inteiro, string, booleano) que define que tipo de valor ela pode conter. Por exemplo:
```javascript
let idade = 25; // idade é uma variável que armazena um número
```
### Listas e Arrays
Listas (ou arrays) são coleções de dados que permitem armazenar múltiplos valores em uma única variável. Elas podem ser acessadas por índices. Por exemplo:
```javascript
let frutas = ["maçã", "banana", "laranja"]; // array de frutas
console.log(frutas[1]); // imprime "banana"
```

### Objetos
Objetos agrupam dados e funcionalidades. Eles contêm pares de chave-valor e são fundamentais em linguagens orientadas a objetos. Por exemplo:
```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};
console.log(carro.marca); // imprime "Toyota"
```

## 3. **Operadores**

### Operadores Aritméticos
Os operadores aritméticos são usados para realizar cálculos matemáticos:
- `+` (adição)
```javascript
let soma = 5 + 3; // soma é 8
```
- `-` (subtração)
```javascript
let subtracao = 10 - 4; // subtracao é 6
```
- `*` (multiplicação)
```javascript
let multiplicacao = 7 * 2; // multiplicacao é 14
```
- `/` (divisão)
```javascript
let divisao = 20 / 4; // divisao é 5
```
- `%` (módulo, que retorna o resto da divisão)
```javascript
let resto = 10 % 3; // resto é 1
```
- `**` (Eleva um número a uma potência)
```javascript
let potencia = 2 ** 3; // potencia é 8 (2 elevado a 3)
```
### Ordem das Operações
A ordem das operações determina como as expressões aritméticas são avaliadas. A regra geral é:

- Parênteses `()`
- Exponenciação `**`
- Multiplicação `*` e Divisão `/`(da esquerda para a direita)
- Adição `+` e Subtração `-` (da esquerda para a direita)

### Exemplo de Ordem das Operações
```javascript
let resultado = 5 + 2 * 3; // resultado é 11 (2 * 3 é avaliado primeiro)
let resultadoComParenteses = (5 + 2) * 3; // resultado é 21
```
### Operadores Lógicos
Os operadores lógicos são usados para combinar expressões booleanas:
- `&&` (E): retorna verdadeiro se `ambas as expressões` forem verdadeiras.
- `||` (OU): retorna verdadeiro se `pelo menos uma das expressões` for verdadeira.
- `!` (NÃO): inverte o valor da expressão. Se a expressão for verdadeira, ele retorna falso, e vice-versa.

#### Exemplos de Operadores Lógicos:
- `&&:`
```javascript
let a = true;
let b = false;
let resultado = a && b; // resultado é false
```
- `||:`
```javascript
let a = true;
let b = false;
let resultado = a || b; // resultado é true
```
`!:`
```javascript
let a = true;
let resultado = !a; // resultado é false
```
#### Exemplos mais Praticos:
```javascript
let idade = 20;
let temAutorizacao = true;
// Verifica se a pessoa pode entrar em uma festa
if (idade >= 18 || temAutorizacao) {
    console.log("Entrada permitida");
} else {
    console.log("Entrada negada");
}
```
```javascript
let idade = 16;
let cidadania = true;
// Verifica se a pessoa pode votar
if (idade >= 18 && cidadania) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}
```
```javascript
let usuario = "admin";
let senha = "1234";
// Verifica se as credenciais estão corretas
if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}
```
### Precedência dos Operadores Lógicos
! (NÃO)
&& (E)
|| (OU)

```javascript
let a = true;
let b = false;
let c = true;
// Avaliação
 let resultado = a || b && c;
//b && c; b && c é avaliado primeiro, pois && tem maior precedência que ||.
// b && c resulta em false && true, que é false.
// A expressão agora é a || false.
// a || false resulta em true || false, que é true.
// Portanto, resultado será true)
```
#### Uso de Parênteses
Você pode usar parênteses para alterar a ordem de avaliação. Isso é útil quando você deseja garantir que certas partes da expressão sejam avaliadas primeiro, independentemente da precedência.
```javascript
let a = true;
let b = false;
let c = true;
// Avaliação com Parênteses
let resultado = (a || b) && c;
```
### Operadores de Comparação
Esses operadores comparam dois valores e retornam um booleano:
- `==` (igualdade): Compara dois valores e retorna verdadeiro se eles forem iguais, realizando conversão de tipo se necessário. Ex.:
```javascript
let a = 5;
let b = '5';
console.log(a == b); // true, porque '5' é convertido para número
```
- `===` (Igualdade Estrita): Compara dois valores e retorna verdadeiro apenas se eles forem iguais e do mesmo tipo, sem conversão de tipo. Ex.:
```javascript
let a = 5;
let b = '5';
console.log(a === b); // false, porque os tipos são diferentes
```
- `!=` (diferente): Compara dois valores e retorna verdadeiro se eles não forem iguais, realizando conversão de tipo se necessário. Ex.:
```javascript 
let a = 5;
let b = '5';
console.log(a != b); // false, porque '5' é convertido para número
```
- `!==` (diferente Estrita): Compara dois valores e retorna verdadeiro se eles não forem iguais ou se forem de tipos diferentes, sem conversão de tipo. Ex.:
```javascript
let a = 5;
let b = '5';
console.log(a !== b); // true, porque os tipos são diferentes
```
- `>` (maior que): Retorna verdadeiro se o valor à esquerda for maior que o valor à direita.Ex.:
```javascript
let a = 10;
let b = 5;
console.log(a > b); // true
```
- `<` (menor que): Retorna verdadeiro se o valor à esquerda for menor que o valor à direita.Ex.: 
```javascript
let a = 3;
let b = 7;
console.log(a < b); // true
```
- `>=` (maior ou igual a): Retorna verdadeiro se o valor à esquerda for maior ou igual ao valor à direita.Ex.: 
```javascript
let a = 5;
let b = 5;
console.log(a >= b); // true
```
- `<=` (menor ou igual a): Retorna verdadeiro se o valor à esquerda for menor ou igual ao valor à direita. Ex.: 
```javascript
let a = 4;
let b = 5;
console.log(a <= b); // true
```
### Resumo das Comparações

| Operador | Descrição                                       | Exemplo                  |
|----------|-------------------------------------------------|-------------------------|
| `==`     | Igualdade (com conversão de tipo)               | `5 == '5'` é `true`     |
| `===`    | Igualdade estrita (sem conversão de tipo)      | `5 === '5'` é `false`   |
| `!=`     | Desigualdade (com conversão de tipo)            | `5 != '5'` é `false`    |
| `!==`    | Desigualdade estrita (sem conversão de tipo)   | `5 !== '5'` é `true`    |
| `>`      | Maior que                                       | `10 > 5` é `true`       |
| `<`      | Menor que                                       | `3 < 7` é `true`        |
| `>=`     | Maior ou igual a                                | `5 >= 5` é `true`       |
| `<=`     | Menor ou igual a                                | `4 <= 5` é `true`       |
## 4. **Funções**
Funções são blocos de código que realizam uma tarefa específica e podem ser reutilizadas em diferentes partes do programa podendo receber parâmetros e retornar valores. Elas ajudam a modularizar o código e a torná-lo mais legível. 
### Estrutura de uma Função
```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // Código a ser executado
    return resultado; // Retorna um valor
}
```
### Mais Exemplos:
```javascript
function somar(a, b) {
    return a + b; // Retorna a soma de a e b
}
let resultado = somar(5, 10); // resultado é 15
```
### Uso de Operadores Aritméticos em Funções
Você pode encapsular operações aritméticas em funções para reutilização e clareza.
### Exemplo de Função de Cálculo
```javascript
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2; // Calcula a média
}
let media = calcularMedia(8, 7); // media é 7.5
```
### Manipulação de Números
#### Operações Matemáticas Básicas
Você pode realizar operações matemáticas básicas usando os seguintes operadores:
- Adição (`+`)
- Subtração (`-`)
- Multiplicação (`*`)
- Divisão (`/`)
- Módulo (`%`): Retorna o resto da divisão.
<br>Ex.:

```javascript
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```
#### Incremento e Decremento
- Incremento (`++`): Aumenta o valor da variável em 1.
- Decremento (`--`): Diminui o valor da variável em 1.
<br>Ex.:

```javascript
let num = 5;
num++; // num agora é 6
num--; // num agora é 5
```
#### Funções Matemáticas
JavaScript oferece um objeto chamado `Math` que contém várias funções úteis para manipulação de números.
`Principais Funções do Objeto Math:`
- `Math.abs(x)`: Retorna o valor absoluto de `x`.
- `Math.ceil(x)`: Arredonda `x` para cima.
- `Math.floor(x)`: Arredonda `x` para baixo.
- `Math.round(x)`: Arredonda `x` para o inteiro mais próximo.
- `Math.random():`  Retorna um número aleatório entre 0 e 1.
- `Math.max(a, b, ...):` Retorna o maior valor entre os argumentos.
- `Math.min(a, b, ...):` Retorna o menor valor entre os argumentos.
- `Math.pow(base, expoente):` Retorna a base elevada ao expoente.
<br>Ex.:

```javascript
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(1, 3, 2)); // 1
console.log(Math.random()); // Número aleatório entre 0 e 1
console.log(Math.pow(2, 3)); // 8
```
#### conversão de Tipos
Às vezes, é necessário converter strings em números ou vice-versa.
- `Number(string):` Converte uma string em um número.
- `parseInt(string):` Converte uma string em um número inteiro.
- `parseFloat(string):` Converte uma string em um número de ponto flutuante.
<br>Ex.:

```javascript
let strInt = "10";
let strFloat = "10.5";
console.log(Number(strInt)); // 10
console.log(parseInt(strFloat)); // 10
console.log(parseFloat(strFloat)); // 10.5
```
#### Formatação de Números
Você pode formatar números com a função toFixed() para definir o número de casas decimais.
<br>Ex.:

```javascript
let num = 2.34567;
console.log(num.toFixed(2)); // "2.35"
```
## 5. **Deputação**
Deputação (ou delegação) em programação refere-se ao ato de passar a responsabilidade de uma tarefa ou função para outra função ou objeto.
### Exemplos de Deputação
- `Delegação de Eventos:` Em JavaScript, você pode usar a delegação de eventos para gerenciar eventos de forma eficiente. Em vez de adicionar um manipulador de eventos a cada elemento, você pode adicionar um único manipulador a um elemento pai.
```javascript
document.getElementById('lista').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Item clicado: ' + event.target.textContent);
    }
});
```
- `Delegação de Funções:` Você pode passar funções como parâmetros para outras funções, permitindo que uma função execute outra.
```javascript
function executar(funcao) {
    funcao();
}
function saudacao() {
    console.log('Olá!');
}
executar(saudacao); // Chama a função saudacao
```
### Exemplos de Deputação
- `Palavras como Representações:` A palavra "árvore" é uma deputação do conceito de uma planta com tronco e folhas. Quando você diz "árvore", está representando a ideia dessa planta.

- `Metáforas e Metonímias:` Em linguagem figurativa, deputação pode ocorrer através de metáforas, onde uma palavra é usada para representar algo diferente, mas relacionado.

## 6. Depuração 
A depuração é o processo de identificar, isolar e corrigir erros ou bugs em um programa. Esses erros podem ser sintáticos, lógicos ou de execução, e a depuração é uma parte crucial do desenvolvimento de software, garantindo que o código funcione como esperado.

### Tipos de Erros
- `Erros Sintáticos:` Erros de gramática no código, como falta de ponto e vírgula ou chaves.
- `Erros de Lógica`: O código é executado sem erros, mas não produz o resultado esperado.
- `Erros de Execução`: Ocorrem durante a execução do programa, como referência a variáveis não definidas.

## Técnicas de Depuração

### Uso de Console.log()
Uma das técnicas mais simples e comuns é usar `console.log()` para imprimir valores e mensagens no console, ajudando a rastrear o fluxo do programa.

```javascript
function soma(a, b) {
    console.log('Valores recebidos:', a, b);
    return a + b;
}
console.log(soma(5, 10)); // 15
```
### Depuradores Integrados
Muitas IDEs e editores de código, como Visual Studio Code, possuem ferramentas de depuração integradas que permitem definir pontos de interrupção (breakpoints), inspecionar variáveis e acompanhar a execução do código passo a passo.
### Testes Unitários
Escrever testes unitários ajuda a garantir que cada parte do código funcione corretamente. Isso facilita a identificação de onde os erros podem estar ocorrendo.
### Análise de Erros
Quando um erro ocorre, a análise da mensagem de erro pode fornecer informações valiosas sobre o que deu errado e onde.
### Revisão de Código
A revisão de código por outros desenvolvedores pode ajudar a identificar problemas que você pode ter perdido.
## Ferramentas de Depuração
- `Chrome DevTools:` Ferramenta poderosa para depuração de JavaScript em navegadores.
- `Visual Studio Code Debugger:` Permite depurar diretamente no editor.
- `Node.js Debugger:` Para depuração de aplicações Node.js.