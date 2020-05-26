/*
 1. Escreva um teste que verifique a chamada do callback 
 de uma função uppercase, que transforma as letras de uma 
 palavra em letras maiúsculas. Lembre-se de ter cuidado 
 com os falso-positivos em testes assíncronos.
*/

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe("Testes - uppercase()", () => {
  test("Palavras em letras maiúsculas", done => {
    const callback = (data) => {
      expect(data).toBe('ABC');
      done();
    }
    uppercase('abc', callback);
  });
});

