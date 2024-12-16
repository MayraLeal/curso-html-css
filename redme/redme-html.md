## Documentação de HTML

- https://developer.mozilla.org/pt-BR/docs/Web/HTML

- https://www.w3schools.com/html/html_intro.asp

## O que é:

A documentação é um guia que toda pessoa desenvolvedora deve levar a sério no dia a dia, é através dela que aprendemos como funcionam as linguagens de programação e também ferramentas e bibliotecas no mundo da tecnologia.

## Sua importância:

A documentação é muito importante no aprendizado e no desenvolvimento de aplicações. Afinal quem melhor que a pessoa que criou a ferramenta para nos orientar sobre as suas funcionalidades, não é mesmo?

## Quando devemos utilizar:

Devemos ler a documentação sempre que precisamos saber a estrutura de um método, ou quando queremos saber algum comando ou recurso de uma biblioteca, ou até mesmo quando esquecemos certa funcionalidade e precisamos relembrar.


### Quirks Mode

O Quirks Mode (modo peculiaridade) adapta as páginas antigas que não estão na versão 5 do HTML para que funcionem normalmente, causando quebras nas páginas HTML 5. Para evitá-lo basta aplicar o <!DOCTYPE html> antes de abrir a tag <html>, fazendo com que o navegador reconheça a versão 5 do HTML e funcione em modo padrão.

## Estrutura Basica 

- !DOCTYPE html:<br>
Informa ao navegador que esse documento é do tipo HTML e indica sua versão. Quando está escrito apenas html, indica que é a mais recente.

- html:<br>
Representa a raiz do documento, serve com um container que engloba todos os outros elementos HTML.

- body: <br>
É onde fica todo o conteúdo de texto, imagem e vídeos, em que o usuário ou usuária vê e interage, nele os conteúdos são estruturados pelas demais tags do HTML.

- script:<br>
Esse elemento contém instruções de script ou aponta para um arquivo de script externo por meio do atributo src.

- head:<br>
Compreende as informações do documento que serão interpretadas pelo navegador (metadados). Como, por exemplo, título do documento, links para folhas de estilo, etc.

- meta:<br>
Define metadados, ou seja, informações sobre dados de um documento HTML. As tags vão dentro do elemento e são usadas para especificar o conjunto de caracteres, o autor ou autora do documento, as configurações da janela de visualização, etc.

- link:<br>
É uma tag vazia, que contém apenas atributos e faz a relação do documento HTML com recursos externos.

Obs.:<br> É comumente usado para vincular uma folha de estilo externa, também é usada para definir o favicon da página (ícone da aba do navegador), como outros recursos.

- style<br>
Essa tag é usada para declarar estilos (CSS) para um documento.

### Tags

- headings | h1 até h6:
 São títulos e subtítulos, indica um nível de importância, sendo h1 o mais importante e h6 o menos importante

- Parágrafo | p: 
São textos para do conteudo

- strong: 
Deixa o texto em negrito para destacar.

- em: 
Usado para tambem da destacar mas com menos enfase que o strong deixa o texto em italico.

- br: 
Usado para pula linha sem tag de feichamento.

- abbr: 
Tag para mostra que é uma abreviação, então quando passa porcima mostra a palavra.

- input: 
É um elemento que cria campos de entrada de dados interativos em formulários. O usuário pode inserir dados como texto, números, datas, cores, entre outros.

- checkbox: 
É um elemento em HTML que permite que o usuário selecione uma ou mais opções de uma lista. São representados por caixas quadradas que se marcam com uma marca de verificação quando ativadas.

- table: Define a tabela. 

- tr: Cria uma nova linha.

- td: Cria uma nova coluna em uma linha.

- th: Define uma célula de cabeçalho na tabela.

Obs.: <br> O corpo da tabela vai se assim table>tr>td o th só é usado no cabeçalho da tabela

- ol:
É usada para criar uma lista ordenada, ou seja, com itens que devem aparecer em sequência. Os itens são apresentados com uma contagem que os precede, como numerais, letras, algarismos romanos, ou símbolos.

- ul: é usada para criar uma lista não ordenada, ou seja, com itens que não precisam aparecer em sequência. Os itens são apresentados com um marcador, como um ponto, um círculo, ou um quadrado.

- li: é uma forma de marcar uma listagem de itens em uma página web

Obs.: <br> O corpo de uma lista é ol>li ou ul>li

- dl: O elemento que delimita a lista

- dt: O elemento que define os termos

- dd: O elemento que descreve os termos

Obs.: <br> O corpo de uma lista com dl é dl>dt+dd ou dl>dt+dd+dt+dd

- details: Pode conter qualquer tipo de conteúdo, permite ao usuário obter informações adicionais sobre um conteúdo.

- summary: É utilizado para criar um sumário ou legenda para o conteúdo de um elemento `details`.

- form: É a responsável por definir o formulário e os atributos que definem o seu comportamento. Todo o conteúdo do formulário deve ser colocado dentro desta tag, são compostos por um ou mais widgets, que podem ser: Campos de texto, Caixas de seleção, Botões, Checkboxes, Radio buttons.

- textarea: é um campo de entrada de texto multi-linha que permite aos usuários inserir textos extensos, como comentários ou formulários de retorno. 

- fielset: é um elemento que agrupa elementos relacionados de um formulário, criando uma caixa ao redor deles para indicar a relação. É uma forma de estruturar formulários de forma mais clara e compreensível.

- legend: Representa um rótulo para o conteúdo do seu ancestral `fieldset`.

- a: É usada para criar links em páginas web, arquivos, endereços de e-mail, ou ligações na mesma página.

- href: Envolver o texto que se deseja transformar em link dentro da tag `<a>`.

- button: é utilizada para inserir interatividade em uma página ou formulário e tem como função executar uma determinada ação ao receber um clique do usuário. 

![Mapa Mental](Documentação%20de%20HTML.png)

## img: 
Apresenta na tela do navegador uma imagem, carregada a partir de um arquivo externo ao código HTML. Esta imagem pode ser apontada na propriedade <strong>src</strong> , de forma absoluta (uma url fixa), ou relativa ao documento HTML.

## Box Model

O Box Model define a estrutura de elementos HTML. 
Consiste em quatro camadas:

1. Conteúdo: Área interna (texto, imagens).
2. Padding: Espaço entre conteúdo e borda.
3. Border: Linha ao redor do padding.
4. Margin: Espaço externo ao elemento.

Características principais:
- Dimensões controladas por width/height (conteúdo), padding, border e margin.
- Margens podem colapsar entre elementos adjacentes.
- Percentuais em padding/margin baseiam-se na largura do pai.

O Box Model é essencial para layouts precisos em CSS, permitindo controle detalhado sobre dimensões e espaçamento dos elementos.

### Box-sizing: 
 O box-sizing é uma propriedade CSS que controla como o tamanho total de um elemento é calculado. Existem dois valores principais:

1. content-box (padrão): Largura/altura se aplica apenas ao conteúdo.
Padding e border são adicionados externamente.

2. border-box: Largura/altura inclui conteúdo, padding e border.
O conteúdo se ajusta internamente.

obs.: `O border-box é frequentemente preferido porque:`
- Torna o cálculo de layouts mais intuitivo. 
- Evita surpresas com dimensões de elementos.
- Facilita designs responsivos.

## Outline
Outline é uma propriedade que cria uma linha ao redor de um elemento, semelhante à borda, mas com algumas diferenças importantes:

Posição: Fica fora da borda, não afetando o layout ou tamanho do elemento.

Espaço: Não ocupa espaço no layout (não empurra outros elementos).

Forma: Geralmente segue a forma da borda, mas pode variar dependendo do navegador.

Propriedades:
outline-width: espessura
outline-style: estilo (solid, dotted, dashed, etc.)
outline-color: cor
outline: shorthand para as três acima
outline-offset: distância entre outline e borda

Uso comum:
- Destacar elementos focados (ex: campos de formulário)
Criar efeitos visuais sem afetar o layout

Acessibilidade:
Importante para navegação por teclado

Diferenças da borda:
- Não afeta o tamanho/posição do elemento
- Não suporta raios de canto individuais
- Não pode ser estilizado por lado (todos os lados são iguais)

## Overflow
Overflow controla como o conteúdo que excede as dimensões de um elemento é tratado.
1. visible (padrão): Conteúdo visível fora dos limites.
2. hidden: Conteúdo excedente é cortado.
3. scroll: Adiciona barras de rolagem.
4. auto: Barras de rolagem apenas quando necessário.

Propriedades: 
- overflow (geral)
- overflow-x (horizontal)
- overflow-y (vertical)

Características:
- Afeta elementos com dimensões definidas.
- Cria novo contexto de formatação.
- Pode influenciar posicionamento absoluto de filhos.

Aplicações:
- Áreas de conteúdo rolável.
- Controle de layout em designs responsivos.
- Prevenção de quebra de layout.

Considerações:
- Cuidado com hidden em conteúdo importante.
- Impacto na usabilidade em dispositivos móveis.

Certamente! Vou explicar os conceitos de block-level e inline-level de forma concisa:

Block-level e inline-level são duas categorias fundamentais de exibição de elementos HTML em CSS, que determinam como os elementos se comportam no fluxo do documento.

### Block-level elements:

Características:
- Ocupam toda a largura disponível do contêiner pai.
- Sempre começam em uma nova linha.
- Podem conter outros block-level e inline-level elements.
- Altura e largura podem ser definidas explicitamente.

Exemplos comuns:
- div, p, h1-h6, ul, li, section, table, form, fildset, hr.

Comportamento:
- Empilham verticalmente por padrão.
- Respeitam propriedades de margem vertical.

### Inline-level elements:

Características:
- Ocupam apenas o espaço necessário para seu conteúdo.
- Não forçam quebras de linha.
- Não podem conter block-level elements.
- Altura e largura não podem ser definidas explicitamente (exceto para replaced elements como imagens).

Exemplos comuns:
- span, a, strong, em, img, br, td, label, input, select, textarea

Comportamento:
- Fluem horizontalmente, como texto.
- Ignoram margens verticais.
- Sensíveis a white-space.

Modificação de comportamento:
- A propriedade `display` pode alterar o comportamento de exibição:
- `display: inline-block`: Combina características de ambos (permite dimensões definidas, mas flui como inline).
- `display: block`: Torna um elemento inline em block-level.
- `display: inline`: Torna um elemento block em inline-level.

Importância:
- Fundamentais para o layout e fluxo do documento HTML.
- Afetam como os elementos interagem entre si e com o contêiner pai.
- Cruciais para entender e controlar o posicionamento de elementos em designs web.