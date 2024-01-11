//import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto analyzer

// declarar todos os itens
    const wordCount = document.querySelector ("[data-testid='word-count']")
    const characterCount = document.querySelector ("[data-testid='character-count']")
    const characterNoSpacesCount = document.querySelector ("[data-testid='character-no-spaces-count']")
    const numberCount = document.querySelector ("[data-testid='number-count']")
    const numberSum = document.querySelector ("[data-testid='number-sum']")
    const wordLengthAverage = document.querySelector ("[data-testid='word-length-average']")
    const textarea = document.querySelector ("[name='user-input']")

    // evento do textarea 
    textarea.addEventListener ('input'); 

    // evento do botão
    document.getElementById ('reset-button').addEventListener () 

    function limparButton ()
    {
        document.getElementById = ('reset-button')
    }