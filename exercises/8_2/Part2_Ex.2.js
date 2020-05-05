// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

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

const listKeys = (lesson) => {
  const arrayOfKeys = Object.keys(lesson);
  for(i in arrayOfKeys){
    console.log(`${arrayOfKeys[i]}: ${lesson[arrayOfKeys[i]]}`);
  }
  console.log('');
};

console.log('Lesson 1:');
listKeys(lesson1);

console.log('Lesson 2:');
listKeys(lesson2);

console.log('Lesson 3:');
listKeys(lesson3);
