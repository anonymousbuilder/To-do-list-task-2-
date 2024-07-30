function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskInput.value;
    li.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-button';
    completeButton.onclick = function () {
        li.classList.toggle('completed');
    };
    li.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function () {
        const newTask = prompt('Edit your task:', taskSpan.textContent);
        if (newTask !== null) {
            taskSpan.textContent = newTask;
        }
    };
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
}
