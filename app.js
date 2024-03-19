/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

function convertToString (value) {
    return String(value)
  }
  const convertToString = value => String(value);

console.log(convertToString(42)); // Exemplo de uso: convertendo o número 42 para uma string e exibindo no console

  /*
    02
  
    - Crie uma função que retorne a quantidade de caracteres que uma string  
      recebida por parâmetro possui.
  */
      const contarCaracteres = (str) => {
        return str.length;
    };
    
    // Exemplo de uso:
    const minhaString = "Olá, mundo!";
    console.log(`A string "${minhaString}" possui ${contarCaracteres(minhaString)} caracteres.`);
    
  /*
    03
  
    - Crie uma função que retorne todos os caracteres de uma string em letras  
      minúsculas;  
    - Utilize a função para exibir a string abaixo no console.
  
    "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
  */
    const converterParaMinusculas = (str) => {
        return str.toLowerCase();
    };
    
    // Exemplo de uso:
    //const minhaString = "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO";
    console.log(converterParaMinusculas(minhaString));
    
  /*
    04
  
    - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
    - Ao ser invocada, a função deve retornar o index do caractere na string.
  */
    const encontrarIndiceCaractere = (caractere, str) => {
        return str.indexOf(caractere);
    };
    
    // Exemplo de uso:
    //const minhaString = "Hello, world!";
    const meuCaractere = "o";
    console.log(`O índice do caractere "${meuCaractere}" na string "${minhaString}" é ${encontrarIndiceCaractere(meuCaractere, minhaString)}.`);
    
  /*
    05
  
    - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
      passado por argumento existe no array (também passado por argumento).
  */
      const verificarExistencia = (item, array) => {
        return array.includes(item);
    };
    
    // Exemplo de uso:
    const meuArray = [1, 2, 3, 4, 5];
    const meuItem = 3;
    console.log(verificarExistencia(meuItem, meuArray)); // true
    
    const outroItem = 6;
    console.log(verificarExistencia(outroItem, meuArray)); // false
    
  /*
    06
  
    - Crie uma função que retorna a concatenação de 2 arrays, passados como  
      argumentos em sua invocação;
  */
      const concatenarArrays = (array1, array2) => {
        return array1.concat(array2);
    };
    
    // Exemplo de uso:
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    console.log(concatenarArrays(array1, array2)); // Resultado: [1, 2, 3, 4, 5, 6]
    
  /*
    07
  
    - Crie uma função que retorna o array passado como argumento em sua invocação,  
      mas com o último item removido.
  */
      const removerUltimoItem = (array) => {
        return array.slice(0, -1);
    };
    
    // Exemplo de uso:
    //const meuArray = [1, 2, 3, 4, 5];
    console.log(removerUltimoItem(meuArray)); // Resultado: [1, 2, 3, 4]
    
  /*
    08
  
    - Crie uma função que retorna se o valor passado como argumento em sua  
      invocação é null.
  */
      const verificarNull = (valor) => {
        return valor === null;
    };
    
    // Exemplo de uso:
    console.log(verificarNull(null)); // true
    console.log(verificarNull(5)); // false
    console.log(verificarNull("string")); // false
    console.log(verificarNull(undefined)); // false
    
  /*
    09
  
    - Crie uma função que apenas invoca uma função de callback recebida por  
      parâmetro;
    - Crie outra função que apenas exibe seu nome no console;
    - Invoque a função que recebe um callback por parâmetro, passando como  
      argumento a função que exibe seu nome no console e veja se o nome realmente  
      foi exibido.
  */
  // Função que invoca um callback recebido por parâmetro
const invocarCallback = (callback) => {
    callback();
};

// Função que exibe seu nome no console
const exibirNome = () => {
    console.log("Meu nome é ChatGPT.");
};

// Invocando a função que recebe um callback por parâmetro
invocarCallback(exibirNome); // Isto exibirá "Meu nome é ChatGPT." no console

  /*
    10
  
    - Crie uma função que invoca uma função de callback recebida por parâmetro.  
      A invocação da função recebida por parâmetro deve receber um valor como  
      argumento;
    - Crie uma função que retorna o triplo de um número recebido por parâmetro;
    - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
      resulte no triplo de 33.
  */
  // Função que invoca uma função de callback recebida por parâmetro, passando um valor como argumento
const invocarCallbackComValor = (callback, valor) => {
    return callback(valor);
};

// Função que retorna o triplo de um número recebido por parâmetro
const triplo = (numero) => {
    return numero * 3;
};

// Invocação da função descrita no 1º item para obter o triplo de 33
const resultado = invocarCallbackComValor(triplo, 33);
console.log(resultado); // Resultado: 99

  /*
    11
  
    - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
      mensagem abaixo no console, substituindo os "X" pelas informações corretas;
    
    "O Xº item do array [X, X, X] é X."
  */
  
  const numbers = [1, 2, 3];

numbers.forEach((item, index) => {
    console.log(`O ${index + 1}º item do array [${numbers}] é ${item}.`);
});

  /*
    12
  
    - Converta o for loop abaixo em um forEach;
    - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
      criada.
  */

  const letters = ['v', 'e', 'p'];
let lettersCopy = [];

letters.forEach(letter => {
    lettersCopy.push(letter);
});

console.log(lettersCopy);
