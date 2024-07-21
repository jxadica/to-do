let taskTitle = document.querySelector(".taskTitle");
let priorityText = document.querySelector(".priority");
let addButton = document.querySelector(".toDoAdd");
let tasklists = document.querySelector(".taskLists");

function pageLoadTasks() {
    let pastTasks = JSON.parse(localStorage.getItem("Todos")) ;
    for (let i = 0; i < pastTasks.length; i++) {
        let newTodo = createTodo(pastTasks[i].title, pastTasks[i].priority);
        tasklists.append(newTodo);
    }
}
pageLoadTasks();

function createTodo (title, priority) {
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <div class="taskContent"> 
            <p class="taskText">${title}</p>
            <p class="priorityText">${priority}</p>
        </div>
        <div class="taskButton">
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        </div>
    `;
    
    let deleteButton = task.querySelector(".deleteButton");
    deleteButton.addEventListener("click", function() {
        task.remove();
        removeFromLocalStorage(title, priority);
    });
    
    let editButton = task.querySelector(".editButton");
    editButton.addEventListener("click", function() {
        let taskText = task.querySelector(".taskText");
        if (editButton.textContent === "Edit") {
            taskText.contentEditable = true;
            editButton.textContent = 'Save';
        } else {
            editButton.textContent = 'Edit';
            taskText.contentEditable = false;
            updateLocalStorage(title, taskText.textContent, priority);
        }
    });

    return task;
}

addButton.addEventListener("click", function() {
    let newTodo = createTodo(taskTitle.value, priorityText.value);
    let pastTasks = JSON.parse(localStorage.getItem("Todos")) ;
    
    pastTasks.push({
        title: taskTitle.value,
        priority: priorityText.value
    });
    
    localStorage.setItem("Todos", JSON.stringify(pastTasks));
    tasklists.append(newTodo);
    taskTitle.value = '';
    priorityText.value = '';
});

function removeFromLocalStorage(title, priority) {
    let pastTasks = JSON.parse(localStorage.getItem("Todos")) ;
    pastTasks = pastTasks.filter(task => !(task.title === title && task.priority === priority));
    localStorage.setItem("Todos", JSON.stringify(pastTasks));
}

function updateLocalStorage(oldTitle, newTitle, priority) {
    let pastTasks = JSON.parse(localStorage.getItem("Todos")) ;
    for (let task of pastTasks) {
        if (task.title === oldTitle && task.priority === priority) {
            task.title = newTitle;
            break;
        }
    }
    localStorage.setItem("Todos", JSON.stringify(pastTasks));
}
