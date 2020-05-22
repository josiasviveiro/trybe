// Ex.1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (object) => {
  const jokeContainer = document.getElementById('jokeContainer');

  const appendJoke = (object) => jokeContainer.innerText = object.joke;

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data));
};

window.onload = () => fetchJoke();
