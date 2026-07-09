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
  for (let i=0; i<todoList.length; i++)
  {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <div> ${name} </div> 
      <div> ${dueDate} </div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderList();
      "> Delete </button>`;

    todoListHTML += html;
  }

  document.querySelector('.js-to-do-list')
    .innerHTML = todoListHTML;
}

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