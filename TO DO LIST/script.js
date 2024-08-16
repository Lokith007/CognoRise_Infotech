
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    
    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your task:', taskText);
            if (newText !== null) {
                textSpan.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(textSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTask = createTaskElement(taskText);
            taskList.appendChild(newTask);
            taskInput.value = ''; 
        }
    });

    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
