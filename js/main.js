const createComment = () => {

  const data  = [{
    titleTask: "",
    contentTask: "",
  }]

  document.querySelector('button').addEventListener( 'click',() => {
    const listTasks = document.getElementById('taskContainer');
    const nameTask = document.getElementById('task');
    const contentTask = document.getElementById('taskDescription');
    const error = document.getElementById('taskError')
    if(nameTask.value === '') {
      error.innerHTML = "Debes ingresar el nombre";
    } else {
      error.innerHTML = "";
    }
  });

}

createComment();