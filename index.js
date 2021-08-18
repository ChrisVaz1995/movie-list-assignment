let message = document.querySelector('#message');

const addMovie = (e) => {
e.preventDefault();

let inputField =  document.querySelector('input');
console.log(inputField.value);
const movie = document.createElement('li');
const movieTitle = document.createElement('span');
const deleteBtn = document.createElement('button');

document.querySelector('ul').appendChild(movie);
movieTitle.textContent = inputField.value;
movieTitle.addEventListener('click', crossOffMovie);
movie.appendChild(movieTitle);
deleteBtn.textContent = 'X';
deleteBtn.addEventListener('click', deleteMovie);
movie.appendChild(deleteBtn);

inputField.value = '';
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (e) => {
    e.target.parentNode.remove();
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked');
    if(e.target.classList.contains('checked')) {
        message.textContent = 'Movie watched';
    } else {
        message.textContent = 'Movie added back'    
    }
}