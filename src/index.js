import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// declarar todos os itens
const wordCount = document.querySelector ("[data-testid='word-count']");
const characterCount = document.querySelector ("[data-testid='character-count']");
const characterNoSpacesCount = document.querySelector ("       [data-testid='character-no-spaces-count']");
const numberCount = document.querySelector ("[data-testid='number-count']");
const numberSum = document.querySelector ("[data-testid='number-sum']");
const wordLengthAverage = document.querySelector ("[data-testid='word-length-average']");
const textarea = document.querySelector ("[name='user-input']");
   

//chamar função
const button = document.getElementById ('reset-button');
button.addEventListener ('click',()=>{
  console.log ('limpar')
  textarea.value = "";
}); 
textarea.addEventListener('input',()=>{
  const caracteres = "contagem de caracteres: " + analyzer.getCharacterCount (textarea.value);
  const palavras = "contagem de palavras: " +analyzer.getWordCount (textarea.value);
  const espaços = "contagem de caracteres sem espaços: " + analyzer.getCharacterNoSpacesCount(textarea.value);
  const comprimento = "contagem média das palavras: " + analyzer.getWordLengthAverage (textarea.value);
  const contandoNúmeros = "contagem de numeros: " + analyzer.getNumberCount (textarea.value);
  const somandoNumeros = "soma de numeros: " + analyzer.getNumberSum (textarea.value);

  characterCount.innerHTML= caracteres;
  wordCount.innerHTML= palavras;
  characterNoSpacesCount.innerHTML= espaços;
  numberCount.innerHTML= contandoNúmeros;
  numberSum.innerHTML= somandoNumeros; 
  wordLengthAverage.innerHTML= comprimento;
    

});

// evento do botão
    
/* button.addEventListener("click", function (){
        textarea.value = "";
        console.log ('limpar')
    });   */

    


    
    
