document.addEventListener('DOMContentLoaded', (event) => {
    let title = document.getElementById("title");
    let book = document.getElementById("book");
    let btn = document.getElementById("btn");
    let rightdiv = document.getElementById("rightdiv");

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (title.value.trim() === '' || book.value.trim() === '') {
            alert('Please enter title and book');
            return;
        }

        const noteElement = document.createElement('div');
        rightdiv.appendChild(noteElement);
        noteElement.setAttribute('data-full-content', book.value);

        const truncatedContent = book.value.slice(0, 20);

        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <h2>${title.value}</h2>
            <p>${truncatedContent}...</p>
            <i class="fas fa-pen" id="fa-pen-${noteElement.dataset.noteId}"></i>
            <i class="fas fa-trash" id="fa-trash-${noteElement.dataset.noteId}"></i>
        `;

        title.value = '';
        book.value = '';

        const deleteButton = noteElement.querySelector('.fa-trash');
        deleteButton.addEventListener('click', () => {
            noteElement.remove();
        });

        const editButton = noteElement.querySelector('.fa-pen');
        editButton.addEventListener('click', () => {
            const note = editButton.parentElement;
            title.value = note.childNodes[1].innerText;
            book.value = note.getAttribute('data-full-content'); // Retrieve full content
            note.remove();
        });
    });
});