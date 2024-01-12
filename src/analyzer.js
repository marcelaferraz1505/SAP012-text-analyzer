const analyzer = {
  getWordCount: (text) => {
    //contando palavras sem numeros e espaços
    const contandoPalavras = text.split(' ');
    console.log(contandoPalavras); console.log(text)
    return contandoPalavras.length;


  },
  getCharacterCount: (text) => {
    //contando caracteres
    return text.length;
  },
  getCharacterNoSpacesCount: (text) => {

    let count = 0;
    //inicio do loop onde i=0 e continua enquanto i < comprimento do texto. A cada iteração o valor de i aumenta 1
    for (let i = 0; i < text.length; i++) {
      //verificando se o caractere i do texto é diferente de um espaço em branco, se sim, encontramos um caractere que não é um espaço. 
      if (text[i] !== ' ') {
        //incrementando 1 na contagem dos caracteres que não são espaços. 
        count++;
      }

    }
    return count;
  },


  getWordLengthAverage: (text) => {
    //trim remov espaços em branco no inic e fim do texto, split divide o texto em palavras usando espaços em branco.  
    const comprimento = text.trim().split(/\s+/);
    //reduce calcula total de caracteres em todas as palavras contidas no array comprimento. Reduce reduz um array a um único valor, a soma do comprimento de palavras.
    //acc parametro acumulador, e comprimento é cada palavra do array. Retorna a soma do acumulador com o comp da palavra. Valor inicial do acc é 0. 
    const totalDeCaracteres = comprimento.reduce((acc, comprimento) => acc + comprimento.length, 0);
    // /divide totaldeC pela quant de palavras no array 
    // ||0 caso resultado seja NaN o valor da média será 0.
    const média = totalDeCaracteres / comprimento.length || 0;
    return parseFloat(média.toFixed(2));


  },

  /*getNumberCount: (text) => {
    const contandoNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    return contandoNumeros ? contandoNumeros.length : 0;
    
  },
  /*
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    console.log ("getNumberSum");
  },
};*/
}

export default analyzer;
