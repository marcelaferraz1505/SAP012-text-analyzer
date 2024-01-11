const analyzer = {  
  getWordCount: (text) => { 
    //contando palavras sem numeros e espaços
    const contandoPalavras = text.match(/[\s0-9]+/g, '');

    return contandoPalavras.length;
    
    console.log ("getWordCount");
  },
  getCharacterCount: (text) => {
    //contando caracteres
     return text.length; 
  },
  getCharacterNoSpacesCount: (text) => {
   const caracteresSemEspaço = text.replace(/\s/g, "");
    return caracteresSemEspaço.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    console.log ("getAverageWordLength");
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    console.log ("getNumberCount");
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    console.log ("getNumberSum");
  },
};

export default analyzer;
