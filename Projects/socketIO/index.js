const socket = io("http://localhost:3000/todo");
const todoItemInput = document.getElementById("todoItemInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");
socket.on("update", (todoItems) => {
  //console.log(todoItems);
  todoList.innerHTML = "";
  todoItems.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.value;
    li.classList="flex gap-5";
    const editButton = document.createElement("button");
    editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
`;
    editButton.onclick = () => {
      updateItem(element);
    };
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>

`;
    deleteButton.onclick = () => {
      deleteItem(element.id);
    };
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
});
addTodo.onclick = addItems;
function addItems() {
  console.log("clicked");
  const input = todoItemInput.value;
  if (input) {
    socket.emit("newItem", input);
    todoItemInput.value = "";
  }
}
function updateItem(item) {
  const newValue=  prompt('Update TODO',item.value)
  if(newValue){
    socket.emit('updatedItem',{id:item.id,value:newValue})
  }
}
function deleteItem(id) {
    socket.emit('deleteItem',id);
}
//todoItemInput
//addTodo
//todoList
