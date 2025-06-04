[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[HTML__BADGE]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white 
[CSS__BADGE]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[MIT__BADGE]: https://img.shields.io/github/license/Naereen/StrapDown.js.svg

<h1 align="center" style="font-weight: bold;">🖱️ TechCare</h1>

![html][HTML__BADGE]
![css3][CSS__BADGE]
![javascript][JAVASCRIPT__BADGE]
![mit][MIT__BADGE]

<p align="center">
  <a href="#sobre">Sobre</a> • 
  <a href="#acesso">Acesse Aqui</a> • 
  <a href="#design">Design</a> •
  <a href="#mobile">Mobile</a> •
  <a href="#funcionalidades">Funcionalidades</a> • 
  <a href="#fontes">Fontes</a> •
  <a href="#licenca">Licença</a>
</p>

<br>
<p align="center">
    <img src="" alt="Imagem do Projeto" width="800px">
</p>
<br>

<h2 id="sobre">📌 Sobre</h2>
<p>Uma landing page de uma empresa de manutenção de computadores, chamada TechCare. Este site possui um <ins>Tema Escuro e Claro</ins> e <ins>dois idiomas</ins>, <ins>Português Brasileiro e Inglês</ins>, ambos são definidos a partir das <ins>preferências do usuário</ins>, e também, podem ser alternados. O projeto foi realizado com <strong>HTML</strong>, <strong>CSS</strong> e <strong>Javascript</strong>, utilizando a prática <strong>Mobile First</strong> e versionamento <strong>Git</strong>.</p>

<br>
<br>

<h2 id="acesso">🚀 Acesse o Projeto</h2>
Veja o projeto você mesmo: LINK

<br>
<br>

<h2 id="design">🎨 Design</h2>
<p>O desing do site foi feito por mim. Foi utilizado o <strong>Figma</strong> para realização do desing.</p>
<p>Segue o link do projeto no figma: LINK FIGMA</p>
<p align="center"><img src="" alt="Imagem do projeto no Figma"></p>

<br>
<br>

<h2 id="mobile">📱 Mobile</h2>
<p>O site foi feito com a prática <strong>Mobile First</strong>, sendo realizado primeiro para as telas menores (celulares) e depois expandido para telas maiores.</p>
<p>A maior diferença no desing para os diferentes tamanhos de telas está no menu, onde em telas menores, de celulares, o menu é um simples menu hamburguer que se expande para a tela toda ao clicado. Para telas médias, tablets, há a logo da empresa na direita e o menu hamburguer na esquerda, expandindo para metada da tela. Agora em telas maiores, o menu é completo.</p>
<p><strong>Telas Menores:</strong></p>
<div align="center">
    <img src="" alt="Imagem do menu em telas menores">
    <img src="" alt="Imagem do menu expandido em telas menores">
</div>
<br>
<p><strong>Telas Médias:</strong></p>
<div align="center">
    <img src="" alt="Imagem do menu em telas médias">
    <img src="" alt="Imagem do menu expandido em telas médias">
</div>
<br>
<p><strong>Telas Maiores:</strong></p>
<div align="center">
    <img src="" alt="Imagem do menu em telas maiores">
    <img src="" alt="Imagem do menu expandido em telas maoires">
</div>

<br>
<br>

<h2 id="funcionalidades">💻 Funcionalidades</h2>
<p>Nesta sessão, falarei sobre o JavaScript, detalhando o que faz e como foi implementado.</p>
<details>
  <summary><h3>Sumário</h3></summary>
  <ol>
    <li><a href="#menu">Ajustes no menu expandido</a></li>
    <li><a href="#dark">Dark Mode</a></li>
    <li><a href="#idioma">Troca de idioma</a></li>
  </ol>
</details>

<h3 id="menu">Ajustes no menu expandido</h3>
<h4>Scroll com Menu Expandido</h4>
<p>A funcionalidade do menu é puramente CSS, não foi feito nada em Javascript. Há um checkbox, com display none. que quando se clica no menu hamburguer, que está dentro de uma label, o checkbox se ativa, assim expandindo a uma div, chamada menu expandido, que, pelo nome, é o menu expandido, ocupando toda a tela com o atributo position em fixed.</p>
<p>Porém, isto gera um problema, quando se expande o menu, ainda é possível rolar a página do site, algo que não deveria ser possível. Então para se prevenir isto, foi criado uma classe chamada <code>no-scroll</code> que é aplicada via Javascript no body sempre que o menu se expande e é retirada quando ele se fecha. Esta classe impede que o usuário role a tela quando o menu se expandir.</p>
<p>Este ajuste foi feito apenas para as telas menores, já que o menu expandido ocupa a tela toda. Agora em telas médias, o menu apenas ocupa metade da tela, assim sendo, não tem o porquê bloquer o scroll. E em telas maiores, o menu expandido não está presente.</p>
<div align="center">
    <img src="" alt="Imagem da classe no-scroll">
    <img src="" alt="Imagem do código JS referente ao problema">
</div>
<br>
<h4>Link não fechando o Menu Expandido</h4>
<p>Outro problema presente era quando se clicava nos links que estavam no menu expandido. O desejável era que quando clicasse em algum link, o menu se fecha e o usuário fosse redirecionado para o local do link, entretanto o menu não estava fechando.</p>
<p>Portanto, via Javascript, é forçado o menu a se fechar. No qual, se desmarca o checkbox e dispara um evento de <code>change</code>, para que destrave o scroll da página, que foi travado por causa da classe <code>no-scroll</code>.</p>
<p align="center"><img src="" alt="Imagem do código JS referente ao problema"></p>

<br>
<br>

<h3 id="dark">Dark Mode</h3>


<br>
<br>

<h3 id="idioma">Troca de idioma</h3>


<br>
<br>

<h2 id="fontes">📚 Fontes & Créditos</h2>


<br>
<br>

<h2 id="licenca">📃 Licença</h2>
Veja a lincença do projeto: <a href="">MIT License</a>

<br>
<br>
