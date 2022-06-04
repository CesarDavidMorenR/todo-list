// clickear prioridad->border color: different y al añdir new task tambien
// funcion que en click se añanda todo

const prioriti_one = document.querySelector('#prioriti_one');
/* document.querySelector();
document.querySelector(); */


prioriti_one.addEventListener('click', () => {

 prioriti_one.style.borderColor = "green";
});

//a Add and delte task

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        `;

    const current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
