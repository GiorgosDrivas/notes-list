'use-strict'; // Use strict mode for development purposes

const newNoteBtn = document.querySelector("#btnNew");
const wrap = document.querySelector("#wrapper");
let noteText = document.getElementById("noteValue");

function spanFunc(name, html, css, parent){ // Function to refactor the action-button creation
    name.innerHTML = html;
    name.classList.add(css);
    parent.appendChild(name);
}

newNoteBtn.addEventListener("click", function(){ // Create a new note
    if(noteText.value === ''){ // If the value of the textarea is empty
        alert("You must fill the box");
    } else {
        let col = document.createElement("div"); // create a col div
        col.classList.add("col-lg-3");
        wrap.appendChild(col);

        let noteWrap = document.createElement("div"); // create a wraper for single note
        noteWrap.classList.add("single-note-wrap");
        col.appendChild(noteWrap);

        let li = document.createElement("li"); // create the li(where the text will be in)
        li.innerHTML = noteText.value;
        noteWrap.appendChild(li);

        const actionsWrap = document.createElement("div"); // create wrapper for the actions
        actionsWrap.classList.add("actions-wrap");
        noteWrap.appendChild(actionsWrap);

        let checkSpan = document.createElement("span"); // Action: Check the note
        spanFunc(checkSpan, 'Check', "check", actionsWrap);

        let deleteSpan = document.createElement("span");// Action: Delete the note
        spanFunc(deleteSpan, 'Delete', "delete", actionsWrap);

        let copySpan = document.createElement("span");// Action: Copy the note
        spanFunc(copySpan, 'Copy to clipboard', "copy", noteWrap);

        let blueColor = document.createElement("span");// Action: change note color
        blueColor.classList.add("blue");
        noteWrap.appendChild(blueColor);

        let yellowColor = document.createElement("span");// Action: change note color
        yellowColor.classList.add("yellow");
        noteWrap.appendChild(yellowColor);

        let greenColor = document.createElement("span");// Action: change note color
        greenColor.classList.add("green");
        noteWrap.appendChild(greenColor);

        blueColor.addEventListener("click", function(e){
            e.originalTarget.parentElement.childNodes[0].style.backgroundColor = '#96EFFF'; // Blue note color
        });

        yellowColor.addEventListener("click", function(e){
            e.originalTarget.parentElement.childNodes[0].style.backgroundColor = '#FBECB2'; // Yellow note color
        });

        greenColor.addEventListener("click", function(e){
            e.originalTarget.parentElement.childNodes[0].style.backgroundColor = '#D0F288'; // Green note color
        });

        checkSpan.addEventListener("click", function(){
            li.classList.toggle("checked"); // Toggle css class to line-through
        });

        copySpan.addEventListener("click", function(){
            navigator.clipboard.writeText(li.innerHTML); // copy to clipboard
        });

        deleteSpan.addEventListener("click", function(e){
            e.originalTarget.parentElement.parentElement.parentElement.remove(); // remove the col div
        });
    }
    noteText.value = ''; // Clear the textarea's value
});
