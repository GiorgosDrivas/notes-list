'use-strict'; // Use strict mode for development purposes

const newNoteBtn = document.querySelector("#btnNew");
const wrap = document.querySelector("#wrapper");
let noteText = document.getElementById("noteValue");
let noteTitle = document.getElementById("noteTitle");
const newWrap = document.querySelector(".new-note-wrap");
let single = document.getElementById("single");

function spanFunc(name, html, css, parent) { // Function to refactor the action-button creation
    name.innerHTML = html;
    name.classList.add(css);
    parent.appendChild(name);
}

newNoteBtn.addEventListener("click", function () { // Create a new note
    let note = { // Create a note object
        title: noteTitle.value, // This could be a dynamic value
        content: noteText.value
    };
    let { title = 'Default title', content = 'Default content' } = note; // destructure the object

    if (title && content) {
        let noteWrap = document.createElement("div"); // create a wrapper for single note
        noteWrap.classList.add("single-note-wrap");
        wrap.appendChild(noteWrap);
        newWrap.appendChild(single);

        noteWrap.dataset.note = JSON.stringify(note);

        let deleteSpan = document.createElement("span"); // Action: Delete the note
        spanFunc(deleteSpan, 'x', "delete", noteWrap);

        deleteSpan.addEventListener("click", function (e) {
            const noteWrapToRemove = this.parentElement;
            noteWrapToRemove.remove();
            single.innerHTML = '';
            e.stopPropagation(); // Prevent event bubbling to the noteWrap click event
        });

        noteWrap.addEventListener("click", function () {
            document.querySelectorAll('.single-note-wrap').forEach(function (el) {
                el.classList.remove('active');
            });

            this.classList.add('active');
            single.innerHTML = '';

            let titleElement = document.createElement("h2");
            titleElement.textContent = title;

            let contentElement = document.createElement("p");
            contentElement.textContent = content;

            single.appendChild(titleElement);
            single.appendChild(contentElement);
        });

        let li = document.createElement("li"); // create the li(where the text will be in)
        const contentTitle = document.createElement("h1");
        contentTitle.innerHTML = noteTitle.value;
        li.appendChild(contentTitle);

        const noteParagraph = document.createElement("p");
        noteParagraph.innerHTML = noteText.value.substring(0, 50) + '...';
        li.appendChild(noteParagraph);

        noteWrap.appendChild(li);

        noteTitle.value = ''; // Clear the title's value
        noteText.value = ''; // Clear the content's value
    } else {
        alert("You must fill a title and text for your note.");
    }
});
