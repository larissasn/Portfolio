const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    '<p>React</p> <br> <p> O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. </p> <br>',
    '<p>Styled Components</p> <br> <p> O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados "componentes".</p> <br>',
    '<p>Node.js</p> <br> <p> Um software que permite rodar aplicações JavaScript do lado do servidor. </p> <br>',
    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
    (new Date(2023, 02, 01)).getTime(), // ReactJS
    (new Date(2023, 02, 01)).getTime(), // Styled Components
    (new Date(2023, 01, 01)).getTime(), // Node.js
    (new Date(2022, 7, 13)).getTime(), // Javascript
    (new Date(2022, 3, 15)).getTime(), // Css3
    (new Date(2022, 3, 15)).getTime(), // HTML5
    (new Date(2022, 5, 1)).getTime(), // Git
    (new Date(2022, 5, 15)).getTime(), // Github
    
    
]
const dataHoje = (new Date()).getTime();

skills.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`;
    })
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    })
});



