let input = document.getElementById('input');
let button = document.getElementById('btn');
let list = document.querySelector(".list");

button.addEventListener('click', () => {
    if (input.value == "") {
        alert('Enter a task');
    } else {

        const task = document.createElement('li');
        let icons = document.createElement("span");
        let doneIcon = document.createElement("i");
        doneIcon.classList.add("fa-solid", "fa-circle-check");

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-trash");
        task.innerHTML = `${input.value}`;
        list.appendChild(task);
        task.appendChild(icons);
        icons.appendChild(doneIcon);
        icons.appendChild(deleteIcon);
        input.value = "";

        deleteIcon.addEventListener('click', () => {
            task.remove()
        });

        doneIcon.addEventListener('click', () => {
            doneIcon.style.color = "green";
            task.style.opacity = "0.5";
        });
    }
});