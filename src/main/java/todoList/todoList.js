document.querySelector('#push').onclick = function () {
    if (document.querySelector('#new-task input').value.length === 0) {
        alert("please enter a task")
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskName">
            ${document.querySelector('#new-task input').value}
            </span>
            <button class="delete" > Delete</button>
          </div>
        `;

        let currentTask = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}