const newNoteBtn = document.querySelector("#btnNew");
const wrap = document.querySelector("#wrapper");
let noteText = document.getElementById("noteValue");

newNoteBtn.addEventListener("click", function(){
    if(noteText.value === ''){
        alert("You must fill the box");
    } else {
        let li = document.createElement("li");
        li.innerHTML = noteText.value;
        wrap.appendChild(li);
        let span = document.createElement("span");
        span.classList.add("delete");
        li.appendChild(span);

        li.addEventListener("click", function(){
            li.classList.toggle("checked");
        });

        span.addEventListener("click", function(e){
            e.originalTarget.parentElement.remove();
        });
    }
    noteText.value = '';
});