/*How to print all prices on new lines

*var answer1 = document.getElementById("answer1");
answer1.innerText = "";


items.forEach (function (item) {
  answer1.appendChild(document.createTextNode(item.price + '\n'));
})

Not how to answer Q1

var allPrices = items.map(function(item) {
  items.innerText = item.price;
});*/

//Question 1: Show me how to calculate the average price of all items.

//Get all prices

var allPrices = items.map(function(item) {
  return item.price;
});

//Get sum

var sum = allPrices.reduce(function(previous, current) {
  return previous + current;
});

//Average

var avg = sum / allPrices.length;

//Answer

var ans = avg.toFixed(2);

//Answer to DOM node

document.getElementById("answer1").textContent = "The average price is $" + ans;

//Question 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

//

var answer2 = document.getElementById("answer2");
answer2.innerText = "";

var newItems = items.filter (function (item) {
  return (item.price > 14 && item.price < 18)
});

newItems.forEach (function (newItem) {
  answer2.appendChild(document.createTextNode(newItem.title + '\n' + '\n'));
});


//Question 3: Which item has a "GBP" currency code? Display its name and price.


var itemGBP = items.filter (function (item) {
  if (item.currency_code === "GBP") {
    return item;
  }
});

itemGBP.forEach(function (object) {
  document.getElementById("answer3").textContent = object.title + " costs £" + object.price;
});


//Question 4: Display a list of all items who are made of wood.

var woodItems = items.filter(function (item){
  if (item.materials.indexOf("wood") !== -1) {
    return item.materials;
  }
});


answer4.innerText = "";

woodItems.forEach (function (object) {
  answer4.appendChild(document.createTextNode(object.title + " is made of wood." + '\n\n'));
});

//Question 5: Which items are made of eight or more materials? Display the name, number of items and the materials it is made of.


var itemsMaterials = items.filter(function (item) {
  if(item.materials.length > 7) {
    return(item);
  }
});


answer5.innerText = "";

itemsMaterials.forEach (function (object) {
  answer5.appendChild(document.createTextNode(object.title + " has " + object.materials.length + " materials:" + '\n\n' + object.materials.join('\n') + '\n\n'));
});

//Question 6: How many items were made by their sellers?

var itemsWhoMade = items.filter(function (item) {
  if(item.who_made  === "i_did") {
    return(item);
  }
});

document.getElementById("answer6").textContent = itemsWhoMade.length + " were made by their sellers";
