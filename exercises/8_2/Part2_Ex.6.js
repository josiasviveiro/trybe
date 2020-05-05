// 6 - Usando o objeto criado no exercício 5, 
// crie uma função que retorne o número total de estudantes em todas as aulas.
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
  turno: 'noite',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function numberOfStudents (object, keyValue) {
  let students = object[keyValue].numeroEstudantes;
  return console.log(students);
}

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);
console.log('');
console.log(Object.entries(allLessons));
console.log('');
console.log(Object.keys(allLessons['lesson1']).includes('numeroEstudantes'));
console.log('');

/* for (var [key, value] of Object.entries(allLessons)) {
  console.log(key + ' ' + Object.entries(value));
} */

numberOfStudents(allLessons, 'lesson1');
numberOfStudents(allLessons, 'lesson2');
numberOfStudents(allLessons, 'lesson3');