// Grab the div
const myDiv = document.getElementById("myDiv");

// 1. Add heading
const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.classList.add("highlight"); // add highlight class
myDiv.appendChild(heading);

// 2. Add paragraph
const para = document.createElement("p");
para.textContent = "This is your first DOM homework assignment";
myDiv.appendChild(para);

// 3. Add unordered list with 3 items
const ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = "List item " + i;
  ul.appendChild(li);
}
myDiv.appendChild(ul);

// 4. Add event listener to button
const button = document.getElementById("addItemBtn");
let newItemCount = 1;

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New List Item " + newItemCount++;
  li.style.color = getRandomColor();
  ul.appendChild(li);
});

// 5. Add event listener to myDiv for background color change
myDiv.addEventListener("click", () => {
  myDiv.style.backgroundColor = getRandomColor();
});

// Helper function for random colors
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

