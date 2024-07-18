// Select elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array to hold tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear existing tasks
    taskList.innerHTML = '';

    // Render each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.description;
        
        // Apply 'completed' class if task is completed
        if (task.completed) {
            li.classList.add('completed');
        }

        // Mark task as completed on click
        li.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to add task
function addTask() {
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
        tasks.push({ description: taskDescription, completed: false });
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task description!');
    }
}

// Function to clear completed tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

// Initial render
renderTasks();