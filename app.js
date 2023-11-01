

const add= document.querySelector(".send");
const list= document.querySelector(".taskList");
const output= document.querySelector(".output");
const sort=document.querySelector(".sort");
let ascendingOrder = true;
function addTask (){
         const li= document.createElement("li");
         const tasks= document.querySelector(".task");
         const content=tasks.value;
         output.style.display="block";
    if (content!==""){
        li.innerText=content;
        list.appendChild(li);
  
    const remove1= document.createElement("a");
        remove1.href="#";
        remove1.className="remove"
    li.appendChild(remove1);
        remove1.addEventListener("click",(e)=>{
        e.preventDefault()
        e.target.parentElement.remove();
      
    });
}
tasks.value = "";
}
add.addEventListener('click',addTask);
    sort.addEventListener("click",()=>{
        const listItems = Array.from(list.querySelectorAll("li"));
        listItems.sort((a, b) => {
            const textA = a.innerText.trim().toLowerCase();
            const textB = b.innerText.trim().toLowerCase();
            if (ascendingOrder) {
                return textA.localeCompare(textB);
            } else {
                return textB.localeCompare(textA);
            }
        });
        list.innerHTML = '';
        listItems.forEach((li) => {
            list.appendChild(li);
        });
        ascendingOrder = !ascendingOrder;
    })
    



