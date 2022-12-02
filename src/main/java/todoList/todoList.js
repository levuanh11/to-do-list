document.querySelector('#push').onclick = function () {
    if (document.querySelector('#new-task input').value.length === 0) {
        // alert("please enter a task")
        failNotify();
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskName">
            ${document.querySelector('#new-task input').value}
            </span>
            <button class="delete" > Delete</button>
          </div>
        `;
        successNotify();
        document.querySelector('#new-task input').value = "";
        let currentTask = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove();
                deleteNotify();
            }
        }
    }
}


let myNotify

function failNotify() {
    myNotify = new Notify({
        status: 'error',
        title: 'Notify Title',
        text: 'please enter a task',
        effect: 'slide',
        type: 3
    })
}

function successNotify() {
    myNotify = new Notify({
        status: 'success',
        title: 'Notify Title',
        text: 'added task successfully',
        effect: 'slide',
        type: 3
    })
}

function deleteNotify() {
    myNotify = new Notify({
        status: 'success',
        title: 'Notify Title',
        text: 'delete task successfully',
        effect: 'slide',
        type: 3
    })
}
