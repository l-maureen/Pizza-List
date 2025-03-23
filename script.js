//To change the current date when browser is opened everyday.
const month = document.getElementById("month");
const date = document.getElementById("date");
const year = document.getElementById("year");
const day = document.getElementById("day");

/*This creates a new date object to show the current date and time.*/
const today = new Date();

/*This will display the current date, day, month, and year in digit.*/
//month.innerHTML = today.getMonth();
//date.innerHTML = today.getDate();
year.innerHTML = today.getFullYear();
//day.innerHTML = today.getDate();

const weeks =  ["Sunday","Monday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//This will change the digital of the current day of the week to text that is listed in the const week.
day.innerHTML = weeks[today.getDay()];
//This change the digital of the current month to text that is listed in the const months.
month.innerHTML = months[today.getMonth()];
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();

/*activity list*/
const doInput = document.getElementById("todoInput");
const doList = document.getElementById("todoList");


//The addTask() function is the core of this code. 
//If the input is empty, it shows an alert asking the user to write something.
function addActivity(){
    if(doInput.value === ''){
        alert("Please add your activities");
    }
    else{
        //If the input is not empty, it proceeds to add the task:
        //It creates a new <li> (list item) element in the variable li.
        //The HTML DOM appendChild() method adds a new child node to the end of a specified parent node’s child list. It can move existing nodes or add new nodes, allowing dynamic updates to the document structure by appending elements, text, or other nodes. Syntax: node.appendChild();
        let li = document.createElement("li");
        //Sets the inner HTML that is stored in the variable li of this new <li> to the value of the input box (what value is added in id input field will be added in the li.innerHTML) 
        li.innerHTML = doInput.value;
          //Appends this new <li> to the #doList. The text of the input fied that is added in the li.innerHTML is dispaly in the #doList.
        doList.appendChild(li);
        //create a deleteSign variable and element to put a cross so the text below the input field after it is typed can be deleted.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    doInput.value = "";
    saveList();
}

//This parts adds a click event listener to a "doList."
//The e in the function parameter represents an event object. The event object contains information about the event that trigger the function.
doList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");     
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//This is to save the activity tasks on the localStorage.setItem()
function saveTasks() {
    localStorage.setItem("tasks", doList.innerHTML);
}

function loadTasks() {
    //This is to to retrieve the value from the specified localStorage.
    //The tasks is the key to identify the stored data.
    const savedTasks = localStorage.getItem("tasks");
    //A savedTasks() is called after the activity task is added, it will show the saved list. 
    if (savedTasks) {
        doList.innerHTML = savedTasks;
    }
}
window.onload = loadTasks;
