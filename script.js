const newNoteBtn = document.querySelector("#btnNew");
const wrap = document.querySelector("#wrapper");
let noteText = document.getElementById("noteValue");

function spanFunc(name, html, css, parent){
    name.innerHTML = html;
    name.classList.add(css);
    parent.appendChild(name);
}

newNoteBtn.addEventListener("click", function(){
    if(noteText.value === ''){
        alert("You must fill the box");
    } else {

        let col = document.createElement("div");
        col.classList.add("col-lg-3");
        wrap.appendChild(col);

        let noteWrap = document.createElement("div");
        noteWrap.classList.add("single-note-wrap");
        col.appendChild(noteWrap);

        let li = document.createElement("li");
        li.innerHTML = noteText.value;
        noteWrap.appendChild(li);

        const actionsWrap = document.createElement("div");
        actionsWrap.classList.add("actions-wrap");
        noteWrap.appendChild(actionsWrap);

        let checkSpan = document.createElement("span");
        spanFunc(checkSpan, 'Check', "check", actionsWrap);

        let deleteSpan = document.createElement("span");
        spanFunc(deleteSpan, 'Delete', "delete", actionsWrap);

        let copySpan = document.createElement("span");
        spanFunc(copySpan, 'Copy to clipboard', "copy", noteWrap);

        checkSpan.addEventListener("click", function(){
            li.classList.toggle("checked");
        });

        copySpan.addEventListener("click", function(){
            navigator.clipboard.writeText(li.innerHTML);
        });

        deleteSpan.addEventListener("click", function(e){
            e.originalTarget.parentElement.parentElement.parentElement.remove();
        });
    }
    noteText.value = '';
});
