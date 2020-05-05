// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const listValues = (object) => {
  console.log(Object.values(object))
  console.log('');
};

console.log('Lesson 1:');
listValues(lesson1);

console.log('Lesson 2:');
listValues(lesson2);

console.log('Lesson 3:');
listValues(lesson3);
