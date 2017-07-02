// create a to do list app
function todolist() {
  var item = document.getElementById("todoInput").value
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
  newItem.appendChild(text)
  document.getElementById("todoList").appendChild(newItem)
}
