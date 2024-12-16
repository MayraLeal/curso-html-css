# Emmet

Emmet uma ferramenta poderosa para escrever HTML e CSS rapidamente. Aqui está uma explicação concisa sobre o Emmet para HTML:

Emmet é um plugin para editores de código que permite escrever HTML (e CSS) de forma abreviada, aumentando significativamente a velocidade de codificação.

Emmet é suportado em muitos editores populares como VS Code, Sublime Text, e Atom. Ele pode aumentar significativamente sua produtividade ao escrever HTML, permitindo criar estruturas complexas com poucas teclas.

# Emmet para HTML:

## 1. Elementos básicos:
- div -> 
```html 
<div></div>
```
- p ->
```html
<p></p>
``` 
## 2. Classes e IDs:
- div.classe ->
```html
<div class="classe"></div>
```
- div#id -> 
```html
<div id="id"></div>
``` 
## 3. Múltiplas classes:
- div.classe1.classe2 -> 
```html
<div class="classe1 classe2"></div>
```
## 4. Elementos aninhados:
- div>p -> 
```html
<div>
    <p></p>
</div>
```
## 5. Elementos irmãos:
- div+p -> 
```html
<div></div>
<p></p>
```
## 6. Multiplicação:
- ul>li*3 -> 
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```
## 7. Agrupamento:
- div>(header>ul>li*2)+footer>p
```html
<div>
    <header>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </header>
    <footer>
      <p></p>
    </footer>
</div>
```
## 8. Atributos personalizados:
   - a[href='https://example.com'] -> 
```html
<a href="https://example.com"></a>
```
## 9. Numeração:
   - ul>li.item$*3 -> 
```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>
```
## 10. Conteúdo de texto:
- p{Texto aqui} -> 
```html
<p>Texto aqui</p>
```
## 11. Elementos implícitos:
- .classe -> 
```html
<div class="classe"></div>
```
- em>.classe -> 
```html
<em><span class="classe"></span></em>
```
- #id ->
```html
<div id="id"></div>
```

## 12. Formulários:
- form:post -> 
```html
<form action="" method="post"></form>
```
## 13. Comentários:
- c -> 
```html
<!-- --> 
```

## 14. Lorem Ipsum:
- lorem -> Gera texto lorem ipsum 

- p>lorem10 -> Parágrafo com 10 palavras de lorem ipsum
Uso do ">" no Emmet:
## 15. Uso básico:
- div>p^span->
```html
<div>
    <p></p>
</div>
<span></span>
```
## 16. Múltiplos níveis:
- div>p>span^^section->
```html
<div>
    <p>
        <span></span>
    </p>
</div>
<section></section>
```
Aqui, usamos "^^" para subir dois níveis, tornando section irmã de div.
## 17. Combinando com multiplicação:
- ul>li*2^p->
```html
<ul>
    <li></li>
    <li></li>
</ul>
<p></p>
```
O p é criado fora do ul, como seu irmão.
## 18. Uso com grupos:
- (div>p>span)+section->
```html
<div>
    <p>
        <span></span>
    </p>
</div>
<section></section>
```
Os parênteses agrupam elementos, e o "+" cria um irmão para todo o grupo.
## 19. Combinações complexas(Lista):
- div>(header>ul>li*2>a)+footer>p->
```html
  <div>
    <header>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </header>
    <footer>
      <p></p>
    </footer>
  </div>
```
Aqui, o ">" está implícito no uso dos parênteses e "+".

# Tabelas
## 1. Tabela básica:
- table>tr>td->
```html
<table> 
    <tr>
        <td></td>
    </tr>
</table>
```
## 2. Tabela com cabeçalho:
    - table>tr>th*3^^tr>td*3->
``` html
<table>
    <tr>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <tr>
       <td></td>
       <td></td>
       <td></td>
    </tr>
</table>
```
## 3. Tabela com múltiplas linhas:
    - table>tr*3>td*3->
``` html
<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
```
## 4. Tabela com thead e tbody:
    - table>(thead>tr>th*3)+(tbody>tr*3>td*3)->
```html
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>  
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
```
## 5. Tabela com conteúdo:
    - table>tr>td{Item $}*3->
```html
<table>
    <tr>
        <td>Item 1</td>
        <td>Item 2</td>
        <td>Item 3</td>
    </tr>
</table>
```
## 6. Tabela com atributos:
    - table[border=1]>tr>td->
```html
<table border="1"><tr><td></td></tr></table>
```
## 7. Tabela complexa:
    - table>(thead>tr>th{Coluna$}*3)+(tbody>tr*3>td{Item $}*3)
```html
<table>
    <thead>
        <tr>
            <th>Coluna 1</th>
            <th>Coluna 2</th>
            <th>Coluna 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
        </tr>
        <tr>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
        </tr>
        <tr>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
        </tr>
    </tbody>
</table>
```