const inputElement = document.querySelector('.new-task-input')
const addTaskButton = document.querySelector('.new-task-button')

const tasksContainer = document.querySelector('.tasks-container')

// validando se a caixa de input está vazia
const validateInput = () => inputElement.value.trim().length > 0

// O comando acima "validateInput" é uma maneira de fazer um código mais limpo, poderia ser feito da seguinte maneira:
/* if(inputElement.value.trim().length > 0) {
  return true
} else {
  return false
} */

// função para
const handleAddTask = () => {
  // verificando se a caixa de input é valida
  const inputIsValid = validateInput()

  if (!inputIsValid) {
    return inputElement.classList.add('error')
  }

  // adicionando uma nova tarefa
  const taskItemContainer = document.createElement('div')
  taskItemContainer.classList.add('task-item')

  const taskContent = document.createElement('p')
  taskContent.innerText = inputElement.value

  const deleteItem = document.createElement('i')
  deleteItem.classList.add('far')
  deleteItem.classList.add('fa-trash-alt')

  taskItemContainer.appendChild(taskContent)
  taskItemContainer.appendChild(deleteItem)

  tasksContainer.appendChild(taskItemContainer)

  // limpar o texto da caixa de input após adicionar a tarefa
  inputElement.value = ''
}

// função para tirar o error caso seja digitado alguma coisa dentro da caixa de input
const handleInputChange = () => {
  const inputIsValid = validateInput()

  if (inputIsValid) {
    return inputElement.classList.remove('error')
  }
}

addTaskButton.addEventListener('click', () => handleAddTask())
inputElement.addEventListener('change', () => handleInputChange())
