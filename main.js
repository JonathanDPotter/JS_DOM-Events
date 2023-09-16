console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// TODO: Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const node1 = document.getElementById("node1");

node1.textContent = 'I used the getElementById("node1") method to access this';

// TODO: Select Node #2 and change the text to: "I used the getElementsByClassName("node2") method to access this" */

const node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  'I used the getElementByClassName("node2") method to access this';

// TODO: Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const h3s = document.getElementsByTagName("h3");
for (h3 of h3s)
  h3.textContent =
    'I used the getElementByTagName("h3") method to access all of these';

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

const p = document.createElement("p");

p.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

const parent = document.getElementById("parent");
parent.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

const a = document.createElement("a");
a.textContent = "I am an <a> tag";

// BONUS: Add a link href to the <a>

a.href = "https://portfolio-next-snowy-omega.vercel.app/";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(a, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const exerciseContainer3 = document.getElementById("exercise-container3");
const n1 = document.getElementById("N1");
const newP = document.createElement("p");
newP.textContent = "New Child Node";
exerciseContainer3.replaceChild(newP, n1);

// TODO: Remove the "New Child Node"

exerciseContainer3.removeChild(newP);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element

const ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

// TODO: Append the new list items to the unordered list element

// completed in the forEach loop above

// TODO: Append the unordered list to the `div#container` under exercise 4

const exerciseContainer4 = document.getElementById("container");
exerciseContainer4.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

const modalBack = document.createElement("div");
modalBack.style.position = "fixed";
modalBack.style.height = "100vh";
modalBack.style.width = "100vw";
modalBack.style.top = 0;
modalBack.style.left = 0;
modalBack.style.backgroundColor = "rgba(0, 0, 0, .5)";
modalBack.style.zIndex = 10;

const modal = document.createElement("div");
modal.style.borderRadius = "1rem";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.height = "50vh";
modal.style.width = "50vw";
modal.style.backgroundColor = "black";
modal.style.display = "flex";
modal.style.flexDirection = "column";
modal.style.padding = "1rem 4rem";
modal.style.justifyContent = "space-around";
modal.style.zIndex = 20;

const modalTitle = document.createElement("h2");
modalTitle.style.textAlign = "center";
modalTitle.textContent = "ALERT!";

const modalText = document.createElement("p");
modalText.textContent =
  "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

const closeButton = document.createElement("button");
closeButton.innerHTML = "CLOSE";
closeButton.style.color = "inherit";
closeButton.style.backgroundColor = "black";
closeButton.style.border = "3px solid white";
closeButton.style.padding = ".5rem";
closeButton.style.borderRadius = ".25rem";

const closeModal = () => document.body.removeChild(modalBack);

closeButton.addEventListener("click", closeModal);

modal.appendChild(modalTitle);
modal.appendChild(modalText);
modal.appendChild(closeButton);
modalBack.appendChild(modal);

const openModal = () => document.body.appendChild(modalBack);

const btn = document.getElementById("btn");
btn.addEventListener("click", openModal);
