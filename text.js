//  Creat book object and add to array.
//  Display the array dynamically.
// store the array to the local storage.
//  Get data from the storage
// Delete a specific book from the brouser and local storage.
const bookArr = [];
const title = document.getElementById('book-title');
const author = document.getElementById('author');
const bookContainer = document.querySelector('.added-books');

const form = document.querySelector('.form');
// Add book method
function addBook(a, b) {
    const object = {
        title: a,
        author: b
    }
    bookArr.push(object);
    display();
    storeDataToStorage();
}
// function to stora data to local storage
function storeDataToStorage() {
    localStorage.setItem('books', JSON.stringify(bookArr));
}
// method to display
function display() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('my-list');
    bookContainer.appendChild(newDiv);
    bookArr.forEach((book, index) => {
        newDiv.innerHTML = `<div>
          <p><strong>${book.title}</strong></p>
          <p><strong>${book.author}</strong></p>
          <button class="remove" id="${index}">Remove</button>
          <hr>
          </div>
          `;
        form.reset();
    });
}
// Add book to the container
const addBtn = document.querySelector('.btn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value !== "" && author.value !== "") {
        addBook(title.value, author.value);
    } else {
        alert('fill all the fields')
    }
})
// Get data from local storage 
function getData() {
    return JSON.parse(localStorage.getItem('books'));
}
window.addEventListener('load', () => {
    getData().forEach((book, index) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('my-list');
        bookContainer.appendChild(newDiv);
        newDiv.innerHTML = `<div>
        <p><strong>${book.title}</strong></p>
        <p><strong>${book.author}</strong></p>
        <button class="remove" id="${index}">Remove</button>
        <hr>
        </div>
        `;
    })
});