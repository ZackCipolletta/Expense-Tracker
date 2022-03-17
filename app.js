let table = document.getElementById('table1'); // create a variable named 'table' and assign it the value of the HTML element with the id 'table1'.
let name1; // create a variable named 'name1'.
let date; // create a variable named 'date'.
let amount; // create a variable named 'amount'.



function add() { // create a function named 'add'.
  addItem(); // calls the function 'addItem' when the 'add' function is called.
  clear(); // calls the function 'clear' when the 'add' function is called.
}

function addItem() { // creates a function named 'addItem'
  name1 = document.getElementById('nameInput').value; // define the variable 'name1' as the value of the HTML element with the id 'nameInput'.
  date = document.getElementById('date').value; //  define the varaible 'date' as the HTML element with the id 'date'
  amount = document.getElementById('amount').value; // define the varaible 'amount' as the HTML element with the id 'amount'
  table.innerHTML += `<tr><td class="one">${name1}</td><td class="two">${date}</td><td class="three">${amount}</td><td class="data"><button  id="delete" onclick='remove(this)'>X</button></td></tr>` // append to the inner HTML of the 'table' variable a new row and new cells with class names 'one', 'two', 'three', 'data', and a 'X' button which will call the remove function to rembove the selected row on click.
}
function clear() { // create a function named 'clear'
  document.getElementById('nameInput').value = ''; // assigns an empty string to the HTML element 'nameInput'.
  document.getElementById('date').value = ''; // assigns an empty string to the HTML element 'date'.
  document.getElementById('amount').value = ''; // assigns an empty string to the HTML element 'amount'.
}

function remove(e) { // creates a funtction named 'remove' with the variable 'e' 
  var target = e.parentNode.parentNode; // creates a variable named 'target' and assigns it the value of the parent node 2 levels up of the elmement which called the 'remove' function.
    target.parentNode.removeChild(target); // removes the row of the target element, so when the 'X' button is clicked, the etire row is deleted.
}
