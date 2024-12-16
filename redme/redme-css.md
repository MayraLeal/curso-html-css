# CSS (Cascading Style Sheets)

É uma linguagem usada para estilizar páginas web. Ela controla a aparência e o layout de elementos HTML, usando seletores, propriedades e valores. Um exemplo simples seria: p { color: blue; }. CSS separa o conteúdo (HTML) da apresentação visual, podendo ser aplicado via arquivo externo, tag <style> ou inline. É essencial para o design web moderno e responsivo, permitindo criar layouts atraentes e funcionais.

## Documentação de CSS

-  https://developer.mozilla.org/pt-BR/docs/Web/CSS

- https://www.w3schools.com/css/

## Estilização inline 

CSS refere-se à adição de estilos diretamente em elementos HTML usando o atributo "style". Por exemplo: <p style="color: blue;">Texto azul</p>. É rápido para testes e útil para estilos dinâmicos controlados por JavaScript, mas dificulta a manutenção e mistura HTML com CSS. Embora seja prático para alterações rápidas, geralmente é preferível usar folhas de estilo externas ou a tag <style> no <head> para projetos maiores e mais organizados.

## Estilização interna

Estilização interna no CSS refere-se à inclusão de estilos dentro do documento HTML, usando a tag <style> no cabeçalho (<head>) da página. Esta técnica permite definir estilos para múltiplos elementos em um único local, sem a necessidade de um arquivo CSS externo. Por exemplo: <style> p { color: blue; } </style>. É útil para páginas únicas ou pequenas, oferecendo um meio-termo entre estilização inline e externa. Embora seja mais organizado que o inline, pode dificultar a manutenção em sites maiores, onde uma folha de estilo externa seria mais eficiente.

## Hieraquia de Especificidade

A hierarquia de especificidade no CSS determina qual estilo é aplicado em caso de conflito. Ordem de prioridade (do maior para o menor): estilos inline, IDs, classes/atributos/pseudo-classes, elementos/pseudo-elementos, seletores universais. Em empates, a última regra declarada prevalece. !important supera todas as regras, mas deve ser usado com cautela. Esta hierarquia é crucial para resolver conflitos e organizar o CSS eficientemente.

## Estilização externa

Estilização externa no CSS refere-se ao uso de um arquivo CSS separado, vinculado ao HTML. É feita criando um arquivo .css e linkando-o no <head> do HTML com <link rel="stylesheet" href="estilo.css">. Esta abordagem separa completamente o estilo do conteúdo, facilitando a manutenção e reutilização de estilos em múltiplas páginas. É a prática recomendada para projetos maiores, pois melhora a organização, reduz a repetição de código e permite o cache do navegador, otimizando o carregamento da página.

## Box Model 

O Box Model no CSS define a estrutura de elementos HTML. Consiste em: conteúdo (área central), padding (espaço interno), border (contorno) e margin (espaço externo). Propriedades CSS controlam cada parte. O tamanho total é a soma dessas partes. Por padrão, width e height afetam só o conteúdo, mas box-sizing: border-box inclui padding e border. Entender o Box Model é crucial para layouts precisos em CSS.

## *(asterisco) Seletor Univesal

O seletor universal (*) em CSS seleciona todos os elementos HTML. Exemplo: * { margin: 0; } zera margens de tudo. É poderoso para resets e estilos globais, mas use com cautela pois pode afetar o desempenho. Tem a menor especificidade na hierarquia de seletores.

## Background

A propriedade background é usada para definir o fundo de um elemento. É uma propriedade shorthand que combina várias propriedades relacionadas ao fundo em uma única declaração. Esta propriedade oferece flexibilidade para criar fundos complexos com uma única linha de código. Incluindo:

1. `background-color`: cor de fundo.
2. `background-image`: imagem de fundo.
3. `background-position`: posição da imagem.
4. `background-size`: tamanho da imagem.
5. `background-repeat`: repetição da imagem.
6. `background-attachment`: rolagem do fundo.

Obs.: exemplo de declaração única: `background: #f0f0f0 url('imagem.jpg') no-repeat center center / cover;`

## Color

A propriedade color define a cor do texto de um elemento. 
Afeta o texto do elemento e alguns elementos decorativos como bordas de tabelas. 
É herdada por elementos filhos. Pode ser especificada de várias formas:

1. Nomes de cores: `color: red;`
2. Valores hexadecimais: `color: #ff0000;`
3. RGB:`color: rgb(255, 0, 0);` 
4. RGBA (com transparência): `color: rgba(255, 0, 0, 0.5);`
5. HSL:`color: hsl(0, 100%, 50%);` 
6. HSLA: `color: hsla(0, 100%, 50%, 0.5);`

## Fontes

As propriedades de fonte controlam a aparência do texto. Fontes web podem ser importadas usando @font-face ou link para maior variedade. As principais são:

1. font-family: define a família da fonte (ex: Arial, sans-serif)
2. font-size: tamanho da fonte (ex: 16px, 1em, 1rem)
3. font-weight: espessura da fonte (ex: normal, bold, 700)
4. font-style: estilo da fonte (ex: normal, italic)
5. line-height: altura da linha
6. text-decoration: decoração do texto (ex: underline, none)

Obs.: A propriedade shorthand 'font' combina várias dessas em uma única declaração. Ex.: font: italic bold 16px/1.5 Arial, sans-serif;

## Unidades de Medida

As unidades de medida são divididas em fixas e relativas. As unidades fixas, como pixels (px), pontos (pt), centímetros (cm), milímetros (mm) e polegadas (in), mantêm um tamanho constante independentemente do contexto. Pixels são os mais comuns na web, enquanto pontos são mais usados para impressão. As unidades relativas, por outro lado, se ajustam com base em outros elementos ou configurações. Estas incluem em (relativo ao tamanho da fonte do elemento pai), rem (relativo ao tamanho da fonte do elemento raiz), porcentagem (%) que é relativa ao elemento pai, e vw/vh que são baseados nas dimensões da viewport. Unidades relativas são preferidas para designs responsivos, pois se adaptam melhor a diferentes dispositivos e preferências do usuário. A escolha entre unidades fixas e relativas depende das necessidades específicas do layout e da experiência do usuário desejada.

### Unidades Fixas:

1. `px (pixels)` : Tamanho fixo, independente do dispositivo ou configurações do usuário, `padrão para web`.
2. `pt (pontos)`: Usado principalmente para impressão, `menos comuns`.
3. `cm, mm, in`: Unidades físicas, raramente usadas na web, `menos comuns`.

### Unidades Relativas:

4. `em`: Relativo ao tamanho da fonte do elemento pai.
5. `rem`: Relativo ao tamanho da fonte do elemento raiz (geralmente <html>).
6. `%`: Porcentagem relativa ao elemento pai.
7. `vw/vh`: 1% da largura/altura da viewport.
8. `vmin/vmax`: 1% da menor/maior dimensão da viewport.

### diferença entre EM e REM

em: A unidade "em", em CSS, é uma medida relativa ao tamanho da fonte do elemento pai. Isso significa que um valor de "1em" corresponde ao tamanho da fonte do elemento pai. Se você definir um elemento com tamanho de fonte de "2em", ele será o dobro do tamanho da fonte do elemento pai. No entanto, essa relação é cumulativa: se você aninhar elementos com tamanhos de fonte em "em", o tamanho da fonte será multiplicado pelo tamanho do elemento pai imediatamente acima na hierarquia.

- Exemplo de tamanho de fontes com “em”:
body {
  font-size: 16px; /* Tamanho da fonte padrão na maioria dos navegadores */}
p {
  font-size: 2em; /* Tamanho da fonte do parágrafo será 2 vezes a fonte padrão do navegador, que nesse caso é 32px */}

- Exemplo de espaçamentos com “em”:
article {
  font-size: 18px; /* Tamanho da fonte do artigo */
  line-height: 1.5em; /* Espaçamento de linha será 1.5 vezes a fonte do artigo */}

REM: A unidade "REM" em CSS é utilizada para definir medidas; é relativa ao tamanho da fonte do elemento raiz. Isso proporciona uma abordagem global e previsível, permitindo que as alterações no tamanho da fonte do elemento raiz afetem uniformemente todos os elementos na página, simplificando a manutenção e garantindo consistência no design.

- Exemplo de tamanho de fontes com “REM”:

html {
  font-size: 16px;  /* Tamanho da fonte do elemento raiz */}

body {
font-size: 2rem;  /* Tamanho de fonte será 2 vezes a fonte do elemento raiz, nesse caso sendo 32px. */}

- Exemplo de espaçamentos com “REM”:
html {
  font-size: 16px; /* Tamanho da fonte do elemento raiz */}

section {
  margin: 1rem; /* Margem será 16 pixels, independentemente do tamanho da fonte do elemento pai */}

### Tamanhos

1. Pixels (px): Unidade fixa
    - 1px = um ponto na tela
    - Ex: font-size: 16px;

2. Pontos (pt): Mais usado para impressão
    - 1pt = 1/72 de polegada
    - Ex: font-size: 12pt;

3. Ems (em): Relativo ao tamanho da fonte do elemento pai
    - 1em = tamanho atual da fonte
    - Ex: Se pai tem 16px, 1.5em = 24px

4. Rems (rem): Relativo ao tamanho da fonte do elemento raiz (<html>)
    - Padrão: 1rem = 16px
    - Ex: font-size: 1.2rem;

5. Porcentagem (%): Relativo ao tamanho do elemento pai
    - Ex: width: 50%; (metade da largura do pai)

6. Viewport Width (vw):
    - 1vw = 1% da largura da viewport
    - Ex: width: 50vw; (metade da largura da viewport)

7. Viewport Height (vh):
    - 1vh = 1% da altura da viewport
    - Ex: height: 100vh; (altura total da viewport)

8. Viewport Min (vmin):
    - 1vmin = 1% da menor dimensão da viewport

9. Viewport Max (vmax):
    - 1vmax = 1% da maior dimensão da viewport

### calc()

A função calc() permite realizar cálculos com diferentes unidades de medida. É útil para combinar unidades fixas e relativas, calc() é suportado em navegadores modernos e oferece flexibilidade no design CSS. As unidades podem ser combinadas usando calc() para cálculos mais complexos.

Sintaxe básica: calc(expressão)

1. `width: calc(100% - 20px);` = Largura total menos 20 pixels
2. `font-size: calc(1rem + 1vw);` = Tamanho de fonte responsivo
3. `height: calc(100vh - 80px);` = Altura da viewport menos 80 pixels

`Operações suportadas: +, -, *, /`

Boas Dicas:
- Use espaços ao redor dos operadores
- Combine unidades diferentes livremente
- Útil para layouts responsivos e centralizações


## Alinhamento e Centralização

O alinhamento e centralização de elementos que oferece várias técnicas para alcançar layouts harmoniosos e responsivos. 
O Flexbox, uma ferramenta poderosa para layouts unidimensionais, permite centralizar facilmente elementos usando 'display: flex' no contêiner, combinado com 'justify-content: center' para alinhamento horizontal e 'align-items: center' para vertical. Para layouts mais complexos, o Grid oferece controle bidimensional, onde 'display: grid' e 'place-items: center' podem centralizar elementos em ambos os eixos. 
Uma técnica clássica e ainda útil é o uso de margens automáticas, aplicando 'margin: 0 auto' a um elemento com largura definida para centralizá-lo horizontalmente. O posicionamento absoluto, embora menos flexível, pode ser eficaz em certos cenários, usando 'position: absolute' junto com 'top: 50%; left: 50%' e 'transform: translate(-50%, -50%)' para centralização precisa. Para alinhamento de texto e elementos inline, 'text-align: center' no elemento pai é uma solução simples. 
As unidades de viewport, como 'height: 100vh', são úteis para criar layouts de página inteira, frequentemente combinadas com Flexbox ou Grid para centralização vertical. A escolha entre essas técnicas depende da estrutura específica da página e dos elementos a serem alinhados, permitindo aos desenvolvedores criar interfaces visualmente atraentes e bem organizadas.

### Flexbox (Flexible Box Layout)

É um modelo de layout unidimensional que permite que você crie designs flexíveis e eficientes. Ele fornece uma maneira mais fácil de projetar estruturas de layout complexas e alinhamento de conteúdo dentro de um contêiner.

1. `Flex Container`: O elemento pai que contém os itens flex.
    - `display`: flex;
    - `flex-direction`: Define o eixo principal (row | column | row-reverse | column-reverse);
    - `justify-content`: Alinhamento no eixo principal (flex-start | flex-end | center | space-between | space-around);
    - `align-items`: Alinhamento no eixo cruzado (stretch | flex-start | flex-end | center | baseline);
    - `flex-wrap`: Controla quebra de linha (nowrap | wrap | wrap-reverse);

2. `Flex Items`: Os filhos diretos do flex container e de um elemento com `display: flex` ou `display: inline-flex`. Podem ser manipulados individualmente dentro do layout flexbox.
    - `flex-grow`: Fator de crescimento do item (número);
    - `flex-shrink`: Fator de encolhimento (número);
    - `flex-basis`: Tamanho base do item (tamanho | auto);
    - `align-self`: Alinhamento individual no eixo cruzado (auto | flex-start | flex-end | center | baseline | stretch);

3. `Main Axis`: O eixo principal do container (horizontal por padrão), a direção principal em que os flex items são dispostos dentro do flex container. É importante entender que o Main Axis pode ser horizontal ou vertical, dependendo da propriedade flex-direction
    - É a direção primária do layout flexbox.
    - Pode ser horizontal ou vertical.

4. `Cross Axis`: O eixo perpendicular ao eixo principal. O Cross Axis no Flexbox é o eixo perpendicular ao Main Axis. Enquanto o Main Axis determina a direção principal do layout, o Cross Axis controla o alinhamento e distribuição dos itens na direção perpendicular.
    - É sempre perpendicular ao Main Axis.
    - Se o Main Axis é horizontal, o Cross Axis é vertical, e vice-versa.

### Pontos importantes:

- O Cross Axis é sempre perpendicular ao Main Axis.
- `align-items` e `align-self` trabalham ao longo do Cross Axis.
- `align-content` só tem efeito quando há múltiplas linhas de flex items.
- Mudar o `flex-direction` altera a direção do Cross Axis.
- O comportamento padrão (stretch) pode ser alterado para atender necessidades específicas de layout.

Entender o Main Axis é crucial para manipular efetivamente layouts flexbox. Ele permite que você crie designs responsivos e adaptáveis com mais facilidade e controle.
Entender o Cross Axis é crucial para criar layouts flexíveis e responsivos. Ele permite um controle preciso sobre como os itens são alinhados e distribuídos perpendicularmente à direção principal do fluxo.

## Grid

È um sistema de layout bidimensional que oferece um controle preciso sobre linhas e colunas, permitindo criar layouts complexos de forma mais fácil e consistente.

Conceitos principais do CSS Grid:

- `Grid Container`: O elemento pai que contém os itens do grid.
- `Grid Items`: Os filhos diretos do grid container.
- `Grid Lines`: As linhas que formam a estrutura do grid (horizontais e verticais).
- `Grid Tracks`: Os espaços entre as grid lines (colunas e linhas).
- `Grid Cells`: A menor unidade do grid, formada pela interseção de uma linha e uma coluna.
- `Grid Areas`: Um grupo de uma ou mais grid cells.

Propriedades importantes do CSS Grid:
Para o Grid Container:
`display: grid`;
`grid-template-columns` e `grid-template-rows`
`grid-template-areas`
`gap `(ou column-gap e row-gap)
`justify-content` e `align-content`

Para os Grid Items:
`grid-column` e `grid-row`
`grid-area`
`justify-self` e `align-self`

## Outline

é uma propriedade que cria uma linha ao redor de um elemento, semelhante à borda (border), mas com algumas diferenças importantes.
O outline é uma linha que contorna um elemento, desenhada fora da borda do elemento, não afetando seu tamanho ou posição. É uma ferramenta útil para destacar elementos, especialmente para fins de acessibilidade e design interativo, sem afetar o layout da página.

### Diferenças entre outline e border:

- O outline não ocupa espaço no layout (não afeta as dimensões ou posição do elemento).
- O outline pode não ser retangular em alguns navegadores (pode seguir a forma do elemento).
- O outline não pode ter cantos arredondados.
- O outline não pode ter estilos diferentes para cada lado (como a borda pode).

### Propriedades principais:

- `outline-width`: Define a espessura da linha.
- `outline-style`: Define o estilo da linha (solid, dotted, dashed, etc.).
- `outline-color`: Define a cor da linha.
- `outline`: Shorthand para definir width, style e color em uma única declaração.
- `outline-offset`: Define a distância entre o outline e a borda do elemento.

### Usos comuns:

- Destacar elementos focados (muito usado em acessibilidade).
- Criar efeitos visuais sem afetar o layout.
- Substituir o outline padrão dos navegadores em elementos focados.

### Importância para acessibilidade:

- O outline é crucial para a navegação por teclado, pois indica qual elemento está focado.
- Remover completamente o outline pode prejudicar a acessibilidade do site.

### Personalização:

- Você pode usar outline: none; para remover o outline padrão, mas é recomendado substituí-lo por um estilo alternativo para manter a acessibilidade.

### Suporte em navegadores:

- A propriedade outline é bem suportada em navegadores modernos.

## Pseudoelementos

Pseudoelementos são uma característica poderosa do CSS que permite aos desenvolvedores estilizar partes específicas de um elemento HTML ou adicionar conteúdo a um elemento sem a necessidade de adicionar marcação extra no HTML. Eles são uma ferramenta versátil para criar efeitos visuais e melhorar o design de uma página web.

A sintaxe para usar um pseudoelemento é um pouco diferente dos seletores CSS padrão. Eles são definidos usando dois pontos duplos (::) seguidos pelo nome do pseudoelemento. Por exemplo: `selector::pseudoelemento { propriedades }`.

### Os pseudoelementos mais comumente usados são:

::before - Este pseudoelemento permite inserir conteúdo antes do conteúdo do elemento selecionado.

::after - Similar ao ::before, mas insere conteúdo depois do conteúdo do elemento selecionado.

::first-line - Permite estilizar a primeira linha de um bloco de texto.

::first-letter - Usado para estilizar a primeira letra de um bloco de texto.

::selection - Permite estilizar o texto que o usuário seleciona na página.

Os pseudoelementos ::before e ::after são particularmente úteis e amplamente utilizados. Eles requerem a propriedade 'content' para funcionar, mesmo que essa propriedade esteja vazia (content: ""). Você pode usar a propriedade 'content' para adicionar texto, imagens ou até mesmo atributos do elemento HTML.

### Os pseudoelementos são frequentemente usados para:

1. Adicionar ícones decorativos a elementos.
2. Criar designs complexos sem adicionar HTML extra.
3. Gerar conteúdo dinâmico baseado em atributos HTML.
4. Criar efeitos de hover sofisticados.
5. Implementar técnicas de design como clearfix.

É importante notar que os pseudoelementos são tratados como filhos do elemento ao qual são aplicados no modelo de caixa CSS. Além disso, nem todos os elementos HTML podem ter pseudoelementos - por exemplo, elementos substituídos como <img> não podem ter ::before ou ::after.

A sintaxe com dois pontos duplos (::) é do CSS3. Em versões anteriores do CSS, usava-se um único dois pontos (:). Para maior compatibilidade com navegadores mais antigos, alguns desenvolvedores optam por usar ambas as formas.

## Estilização de Input

Os inputs são componentes essenciais em formulários web e sua estilização adequada pode melhorar significativamente a experiência do usuário e a aparência geral do seu site. Vamos abordar os principais aspectos da estilização de inputs:

1. Seletores básicos: Para estilizar inputs, você pode usar seletores como:

    - input { } - seleciona todos os inputs
    - input[type="text"] { } - seleciona inputs de texto
    - input[type="checkbox"] { } - seleciona checkboxes
    - input[type="radio"] { } - seleciona botões de rádio

2. Propriedades comuns:

    - width e height: para definir as dimensões
    - padding: para espaçamento interno
    - border: para estilizar as bordas
    - border-radius: para cantos arredondados
    - font-size e font-family: para estilizar o texto
    - color: para a cor do texto
    - background-color: para a cor de fundo

3. Estados do input: Você pode estilizar diferentes estados dos inputs usando pseudoclasses:

    - `:focus` - quando o input está em foco
    - `:hover` - quando o mouse está sobre o input
    - `:disabled` - quando o input está desabilitado

4. Placeholder: Para estilizar o texto do placeholder, use a pseudoclasse ::placeholder.

5. Responsividade: Para inputs responsivos, use unidades relativas e media queries.

6. Acessibilidade: Lembre-se de manter bom contraste e tamanhos adequados para acessibilidade.

7. Transições: Adicione transições suaves para melhorar a experiência do usuário.

Estilizar inputs adequadamente pode melhorar significativamente a usabilidade e a estética do seu formulário. É importante encontrar um equilíbrio entre design atraente e funcionalidade, sempre mantendo em mente a acessibilidade e a consistência entre diferentes navegadores e dispositivos.

## Estilização de imagem

O CSS permite controlar as dimensões de uma imagem usando as propriedades `width` e `height`. Você pode definir uma largura fixa para uma imagem ou fazer com que ela ocupe 100% da largura de seu contêiner. Para manter a proporção da imagem, é comum definir apenas a largura e deixar a altura como `auto`.

As bordas das imagens podem ser estilizadas usando a propriedade `border`. Você pode definir a espessura, o estilo e a cor da borda. Além disso, a propriedade `border-radius` permite criar cantos arredondados, o que pode ser usado para criar imagens circulares ou com cantos suavizados.

Oferece controle sobre como a imagem se ajusta dentro de suas dimensões definidas. A propriedade `object-fit` é particularmente útil aqui. Com `object-fit: cover`, a imagem preencherá todo o espaço designado, cortando as partes que não cabem. Com `object-fit: contain`, a imagem será redimensionada para caber inteiramente dentro do espaço, possivelmente deixando espaços vazios.

Efeitos visuais podem ser aplicados às imagens usando várias propriedades CSS. A `opacity` controla a transparência da imagem. A propriedade `filter` oferece uma variedade de efeitos, como escala de cinza, brilho, contraste, desfoque e sépia. Esses filtros podem ser combinados para criar efeitos únicos.

Para adicionar profundidade ou ênfase, a propriedade `box-shadow` pode ser usada para criar sombras ao redor da imagem. Isso pode dar a impressão de que a imagem está flutuando acima do fundo.

A responsividade é crucial no design web moderno. Usar `max-width: 100%` e `height: auto` garante que a imagem nunca exceda a largura de seu contêiner e mantenha sua proporção em telas menores.

Efeitos de  hoverodem ser adicionados para criar interatividade. Por exemplo, você pode fazer uma imagem aumentar ligeiramente quando o mouse passa sobre ela, usando a propriedade `transform` com `scale`.

Para imagens de fundo, o CSS oferece várias propriedades como `background-image`, `background-size`, `background-position` e `background-repeat`. Estas permitem controlar como a imagem de fundo é exibida e posicionada dentro de um elemento.

Além da estilização visual, é importante considerar a acessibilidade ao trabalhar com imagens. Isso inclui fornecer textos alternativos significativos usando o atributo `alt` no HTML.

## Classe e ID

Classes e IDs são seletores CSS usados para estilizar elementos HTML específicos. Classes e IDs podem ser combinados com outros seletores para regras mais específicas. A escolha entre eles depende da necessidade de reutilização e especificidade do estilo. 

### Classes:
- Identificadas por um ponto (.) no CSS
- Atribuídas com o atributo "class" no HTML
- Reutilizáveis em múltiplos elementos
- Um elemento pode ter várias classes
- Usadas para estilos comuns e reutilizáveis

### IDs:
- Identificados por uma hashtag (#) no CSS
- Atribuídos com o atributo "id" no HTML
- Devem ser únicos na página
- Um elemento só pode ter um ID
- Maior especificidade que classes7
- Úteis para elementos únicos e JavaScript

### Boas práticas:
- Use nomes descritivos
- Prefira classes para estilos reutilizáveis
- Use IDs para elementos únicos ou JavaScript
- Use hífens para separar palavras (ex: "texto-principal")