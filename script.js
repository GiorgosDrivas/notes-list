const newNoteBtn = document.querySelector("#btnNew");
const wrap = document.querySelector("#wrapper");
let noteText = document.getElementById("noteValue");

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
        checkSpan.innerHTML = 'Check';
        checkSpan.classList.add("check");
        actionsWrap.appendChild(checkSpan);

        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = 'Delete';
        deleteSpan.classList.add("delete");
        actionsWrap.appendChild(deleteSpan);

        let copySpan = document.createElement("span");
        copySpan.innerHTML = 'Copy to clipboard';
        copySpan.classList.add("copy");
        noteWrap.appendChild(copySpan);

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