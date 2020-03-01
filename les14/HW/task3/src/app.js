let rootNode = document.getElementById('root');

const addButton = document.getElementById('add');
const inputTask = document.getElementById('new-task');
const listWrapper = document.querySelector('ul');
const container = document.getElementById('container');
const taskDiv = document.getElementById('task-div');

function createNewElement(task) {
  let listItem = document.createElement('li');
  let checkbox = document.createElement('button');
  checkbox.className = 'material-icons checkbox';
  checkbox.innerHTML = '<i class="material-icons checkbox-button_item">check_box_outline_blank</i>';
  let label = document.createElement('label');
  label.innerText = task;
  let input = document.createElement('input');
  input.type = 'text';
  input.className = 'list-input';
  let editButton = document.createElement('button');
  editButton.className = 'material-icons edit';
  editButton.innerHTML = '<i class="material-icons checkbox-button_item">edit</i>';
  let deleteButton = document.createElement('button');
  deleteButton.className = 'material-icons delete';
  deleteButton.innerHTML = '<i class="material-icons checkbox-button_item">delete</i>';

  listItem.draggable = true;
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(input);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

function addTask() {
  if (inputTask.value) {
    let listItem = createNewElement(inputTask.value);
    listWrapper.prepend(listItem);
    bindTaskEvents(listItem);
    inputTask.value = '';
  }

  if (!(listWrapper.children.length < 10)) {
    let p = document.createElement('p');
    p.className = 'notification';
    p.innerHTML = 'Maximum item per list are created';
    container.insertBefore(p, taskDiv);

    inputTask.disabled = 'disabled';
    addButton.removeEventListener('click', addTask);
  }

  sortable(listWrapper);
}

addButton.addEventListener('click', addTask);

function deleteTask() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);

  if (inputTask.disabled) {
    let p = document.querySelector('.notification');
    container.removeChild(p);

    inputTask.disabled = false;
    addButton.addEventListener('click', addTask);
  }
}

function editTask() {
  let editButton = this;
  let listItem = this.parentNode;
  let label = listItem.querySelector('label');
  let input = listItem.querySelector('input[type = text]');

  let containClass = listItem.classList.contains('editMode');

  if (containClass) {
    label.innerText = input.value;
    editButton.className = 'material-icons edit';
    editButton.innerHTML = '<i class="material-icons checkbox-button_item">edit</i>';
  } else {
    input.value = label.innerText;
    editButton.className = 'material-icons save';
    editButton.innerHTML = '<i class="material-icons checkbox-button_item">save</i>';
  }

  listItem.classList.toggle('editMode');
}

function finishTask() {
  let list = this.parentNode.parentNode;
  let listItem = this.parentNode;
  listItem.classList.add('done');
  let checkbox = listItem.querySelector('button.checkbox');
  checkbox.className = 'material-icons checkbox';
  checkbox.innerHTML = '<i class="material-icons checkbox-button_item">check_box</i>';
  checkbox.removeEventListener('click', finishTask);

  list.append(listItem);
}

function bindTaskEvents(listItem) {
  let deleteButton = listItem.querySelector('button.delete');
  let editButton = listItem.querySelector('button.edit');
  let checkbox = listItem.querySelector('button.checkbox');

  deleteButton.addEventListener('click', deleteTask);
  editButton.addEventListener('click', editTask);
  checkbox.addEventListener('click', finishTask);
}

function sortable(rootEl) {
  let dragEl;

  function _onDragOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';

    let target = evt.target;

    if (target && target !== dragEl && target.nodeName === 'LI') {

      let rect = target.getBoundingClientRect();
      let next = (evt.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
      rootEl.insertBefore(dragEl, next && target.nextSibling || target);
    }
  }

  function _onDragEnd(evt) {
    evt.preventDefault();

    rootEl.removeEventListener('dragover', _onDragOver, false);
    rootEl.removeEventListener('dragend', _onDragEnd, false);
  }

  rootEl.addEventListener('dragstart', function (evt) {
    dragEl = evt.target;


    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('Text', dragEl.textContent);


    rootEl.addEventListener('dragover', _onDragOver, false);
    rootEl.addEventListener('dragend', _onDragEnd, false);

  }, false);
}

// localStorage block

window.addEventListener('beforeunload', () => {
  let itemsArray = [];

  const list = document.querySelectorAll('.container ul li');

  list.forEach(item => {
    let storageItem = {};
    storageItem.value = item.querySelector('label').innerText;
    storageItem.done = false;

    if (item.classList.contains('done')) {
      storageItem.done = true;
    }

    itemsArray.push(storageItem);
  });

  localStorage.setItem('items', JSON.stringify(itemsArray));
});

window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('items'));
  
  data.forEach(item => {
    createFromStorage(item);
  });
});

function createFromStorage({value, done}) {

  let listItem = createNewElement(value);
  listWrapper.append(listItem);
  bindTaskEvents(listItem);

  if (done) {
    listItem.classList.add('done');
    let checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons checkbox-button_item">check_box</i>';
    checkbox.removeEventListener('click', finishTask);
  }
}