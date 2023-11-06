

const add= document.querySelector(".send");
const list= document.querySelector(".taskList");
const output= document.querySelector(".output");
const sort=document.querySelector(".sort");
const span= document.createElement("span");
const sorting=document.querySelector(".sorting");
const az=document.querySelector(".az");
const za=document.querySelector(".za");
// let ascendingOrder = true;
za.style.display="none";
function addTask (){
         const li= document.createElement("li");
         const span= document.createElement("span");
         const tasks= document.querySelector(".task");
         const content=tasks.value;
         
    if (content.trim()!=="" && content!==""){
        list.style.display="inline-block";
        span.innerText=content;
        li.prepend(span)
        list.appendChild(li);
    const remove1= document.createElement("a");
        remove1.href="#";
        remove1.className="remove"
        li.appendChild(remove1);
        remove1.addEventListener("click",(e)=>{
        e.preventDefault()
        e.target.parentElement.remove();
        if(list.childElementCount===0){
            output.style.display="none";
            list.style.display="none";
        }
        
      az.style.display="block";
    });
}
if(list.childElementCount !== 0){
    output.style.display="block";
            list.style.display="block";
}
tasks.value = "";
}
add.addEventListener('click',addTask);

    az.addEventListener('click',()=>{
        az.style.display="block";
    za.style.display="none";
        const listItems = Array.from(list.querySelectorAll("li"));
            listItems.sort((a, b) => {
            const textA = a.innerText.trim().toLowerCase();
            const textB = b.innerText.trim().toLowerCase();
            return textA.localeCompare(textB);
        });
        list.innerHTML = '';
        listItems.forEach((li) => {
            list.appendChild(li);
        });
        az.style.display="none";
        za.style.display="block";
    });

    za.addEventListener('click',()=>{
        za.style.display="block";
    az.style.display="none";
        const listItems = Array.from(list.querySelectorAll("li"));
            listItems.sort((a, b) => {
            const textA = a.innerText.trim().toLowerCase();
            const textB = b.innerText.trim().toLowerCase();
            return textB.localeCompare(textA);
        });
        list.innerHTML = '';
        listItems.forEach((li) => {
            list.appendChild(li);
        });
        za.style.display="none";
        az.style.display="block";
    });



