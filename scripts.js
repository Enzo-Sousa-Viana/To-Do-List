const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const completelist = document.querySelector(".list-tasks")


let mylist = []


function newtask() {

    mylist.push({
        task: input.value,
        completed: false
    })

    input.value = ''

    showtasks();
}


function showtasks() {
    let newLi = ''

    mylist.forEach((task, index) => {
        newLi = newLi + `

        <li class="task ${task.completed ? "done" : ""}">
            <img src="./checked.png" alt="check-on-task" onclick="completetask(${index})">
            <p>${task.task}</p>
            <img src="./trash.png" alt="task-on-trash" onclick="deleteItem(${index})">
        </li> 

        `
    })


completelist.innerHTML = newLi

localStorage.setItem('list', JSON.stringify(mylist))


}


function completetask(index) {
    mylist[index].completed = !mylist[index].completed

    showtasks()
}


function deleteItem(index) {
    mylist.splice(index, 1)

    showtasks()
}


function reloadScreen() {
    const localStoragetasks = localStorage.getItem('list');

    if (localStoragetasks) {
        mylist = JSON.parse(localStoragetasks);
    }

    showtasks();
}


function newtask() {
    const taskValue = input.value.trim(); 

    if (taskValue === "") {
        
        return;
    }

    mylist.push({
        task: taskValue,
        completed: false
    });

    input.value = '';

    showtasks();
}


reloadScreen();
button.addEventListener('click', newtask);