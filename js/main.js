const app = () => {
  // Variables
  const nameTask = document.getElementById('task');
  const contentTask = document.getElementById('taskDescription');
  const listTitle = document.getElementById('title')
  const listContent = document.getElementById('content')

  // Funcion añadir tarea
  const addTask = () => {
    // Textos 'nodos'
    const task = document.createTextNode(nameTask.value);
    const content = document.createTextNode(contentTask.value);

    // Validacion de inputs
    // Se le da el atributo placeholder con su valor
    // Se agrega una clase no implicita en el codigo html original
    //    Si no cuando se cumpla la condicion se agrega dicha clase
    if (nameTask.value === "" ) {
      nameTask.setAttribute("placeholder", "Task invalid");
      nameTask.className = "error"
      return false;
    }

    if (contentTask.value === "") {
      contentTask.setAttribute("placeholder", "Content invalid");
      contentTask.className = "error"
      return false;
    }

    // Se crea los elemenos

    const newTask = document.createElement('li');
    const newContent = document.createElement('li');

    // Se agrega el contenido al elemento y se agrega el elemento al padre
    newTask.appendChild(task);
    newContent.appendChild(content);
    listTitle.appendChild(newTask);
    listContent.appendChild(newContent);
  }


  document.querySelector('button').addEventListener( 'click', addTask);

}

  // error.innerHTML = "";
  // document.getElementById('title').append(nameTask.value);
  // document.getElementById('content').append(contentTask.value);
app();