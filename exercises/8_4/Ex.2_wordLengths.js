/* Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:
*/

const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (array) => {
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(array[i].length);
  }
  return newArr;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
