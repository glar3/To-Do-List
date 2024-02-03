var myNodeList = document.getElementsByTagName("LI");

for (var i = 0; i < myNodeList.length; i++) {
  var input = document.createElement("BUTTON");
  var deleteText = document.createTextNode("Delete Task");
  input.className = "delete";
  input.appendChild(deleteText);
  myNodeList[i].appendChild(input);
}

var deleteTask = document.getElementsByClassName("delete");

for (var i = 0; i < deleteTask.length; i++) {
  deleteTask[i].onclick = function () {
    var taskLI = this.parentElement;
    taskLI.style.display = "none";
  };
}

var myCheckList = document.getElementsByTagName("LI");

for (var i = 0; i < myCheckList.length; i++) {
  var input = document.createElement("input");
  input.className = "checked";
  input.type = "checkbox";

  myCheckList[i].insertBefore(input, myCheckList[i].firstChild);
}

var completeTask = document.getElementsByClassName("checked");

for (var i = 0; i < completeTask.length; i++) {
  completeTask[i].onclick = function () {
    var check = this.parentElement;
    var spans = check.getElementsByTagName("span");
    if (this.checked) {
      for (var j = 0; j < spans.length; j++) {
        spans[j].style.textDecoration = "2px line-through";
        span[j].style;
      }
    } else {
      for (var j = 0; j < spans.length; j++) {
        spans[j].style.textDecoration = "none";
      }
    }
  };
}

function setupEventListeners() {
  var items = document.querySelectorAll(".items li");

  items.forEach(function (item) {
    var deleteButton = item.querySelector(".delete");
    var checkbox = item.querySelector(".checked");

    deleteButton.onclick = function () {
      var taskLI = this.parentElement;
      taskLI.style.display = "none";
    };

    checkbox.onclick = function () {
      var check = this.parentElement;
      var spans = check.getElementsByTagName("span");
      if (this.checked) {
        for (var j = 0; j < spans.length; j++) {
          spans[j].style.textDecoration = " 2px line-through";
        }
      } else {
        for (var j = 0; j < spans.length; j++) {
          spans[j].style.textDecoration = "none";
        }
      }
    };
  });
}

function newElement() {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var checkbox = document.createElement("input");
  var deleteItem = document.createElement("button");
  var inputValue = document.getElementById("taskName").value;
  var text = document.createTextNode(inputValue);
  var deleteText = document.createTextNode("Delete Task");
  checkbox.type = "checkbox";
  checkbox.className = "checked";
  span.id = "listItemName"; // using ID as per your HTML
  span.appendChild(text);
  deleteItem.className = "delete";
  deleteItem.appendChild(deleteText);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteItem);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.querySelector(".items").appendChild(li);
    // Set up event listeners for the new elements
    setupEventListeners();
  }
  document.getElementById("taskName").value = "";
}
