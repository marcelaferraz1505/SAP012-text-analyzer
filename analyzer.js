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
  getCharacterCountExcludingSpaces: (text) => {

    let count = 0;
    //inicio do loop onde i=0 e continua enquanto i < comprimento do texto. A cada iteração o valor de i aumenta 1
    for (let i = 0; i < text.length; i++) {
      //verificando se o caractere i do texto é diferente de um espaço em branco, se sim, encontramos um caractere que não é um espaço. 
      if (text[i] !== ' ' && text[i] !== "." && text[i] !== ",") {
        //incrementando 1 na contagem dos caracteres que não são espaços. 
        count++;
      }

    }
    return count;
  },


  getAverageWordLength: (text) => {
    //trim remov espaços em branco no inic e fim do texto, split divide o texto em palavras usando espaços em branco.  
    const comprimento = text.trim().split(/\s+/);
    //reduce calcula total de caracteres em todas as palavras contidas no array comprimento. Reduce reduz um array a um único valor, a soma do comprimento de palavras.
    //acc parametro acumulador, e comprimento é cada palavra do array. Retorna a soma do acumulador com o comp da palavra. Valor inicial do acc é 0. 
    const totalDeCaracteres = comprimento.reduce((acc, comprimento) => acc + comprimento.length, 0);
    // /divide totaldeC pela quant de palavras no array 
    // ||0 caso resultado seja NaN o valor da média será 0.
    const média = totalDeCaracteres / comprimento.length;
    return parseFloat(média.toFixed(2));


  },

  getNumberCount: (text) => {
    //O método match() retorna uma correspondência entre uma string com uma expressão regular
    const contandoNumeros = text.match(/\b\d+(\.\d+)?\b/g);

    /*Aqui, verificamos se o array contandoNumeros contém alguma correspondência. Se sim, retornamos o comprimento do array (ou seja, o número de correspondências), caso contrário, retornamos 0.*/
    return contandoNumeros ? contandoNumeros.length : 0;

  },

  getNumberSum: (text) => {
    //encontrar numeros no texto
    const somandoNumeros = text.match(/\b\d+(?:\.\d+)?\b/g);
    //Após encontrar os números no texto, a função itera sobre cada número encontrado e os converte para o tipo "Number".Durante a iteração, a função soma todos os números encontrados para obter a soma total. Se nenhum número for encontrado no texto, a função retorna 0 como resultado.
    if (somandoNumeros) {
      let total = 0;
      for (let i = 0; i < somandoNumeros.length; i++) {
        
        total += Number(somandoNumeros[i]);
      }
      return total;
    } else {
      return 0;
    }

  },
}


export default analyzer;
