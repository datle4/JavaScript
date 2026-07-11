const todoList = [{
  name:'make dinner',
  dueDate: '2026-12-22'
}, { 
  name:'wash dishes',
  dueDate: '2026-10-23'
}];

renderList();

function renderList () {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div> ${name} </div> 
      <div> ${dueDate} </div>
      <button class="delete-button js-delete-button"> Delete </button>`;

    todoListHTML += html;
  });

  document.querySelector('.js-to-do-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderList();
      });
    });
}

document.querySelector('.js-add-click')
  .addEventListener("click", () => {addToDo();});

function addToDo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value; 

  const inputDate = document.querySelector('.js-date-input');
  const dueDate = inputDate.value;

  todoList.push({
    name, 
    dueDate
  });

  renderList();
}