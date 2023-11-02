

const add= document.querySelector(".send");
const list= document.querySelector(".taskList");
const output= document.querySelector(".output");
const sort=document.querySelector(".sort");
const span= document.createElement("span");
const sorting=document.querySelector(".sorting");

let ascendingOrder = true;
function addTask (){
         const li= document.createElement("li");
         const tasks= document.querySelector(".task");
         const content=tasks.value;
         
    if (content!==" " && content!==""){
        list.style.display="block";
        output.style.display="block";
        li.innerText=content;
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
        special.remove();
      
    });
}
tasks.value = "";
}

add.addEventListener('click',addTask);

    sort.addEventListener("click",()=>{
        const listItems = Array.from(list.querySelectorAll("li"));
        console.log(listItems);
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
    



