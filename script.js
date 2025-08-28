let currentUser = {
  name: "",
  age: 0,
  color: "",
  isAdult: false,
};

function analyzeUserData() {
  // Capture user input using DOM selection
  const nameInput = document.getElementById("userName").value;
  const ageInput = parseInt(document.getElementById("userAge").value);
  const colorInput = document.getElementById("favoriteColor").value;

  // Data validation using conditionals
  if (!nameInput || !ageInput || !colorInput) {
    alert("Please fill in all fields!");
    return;
  }

  // Store data in our user object
  currentUser.name = nameInput;
  currentUser.age = ageInput;
  currentUser.color = colorInput;
  currentUser.isAdult = ageInput >= 18; // Boolean logic

  // Generate analysis using conditionals and string interpolation
  let analysis = `<h3>Hello, ${currentUser.name}! 👋</h3>`;

  // Age-based conditional logic
  if (currentUser.age < 13) {
    analysis += `<p>You're a kid! Enjoy your childhood! 🧒</p>`;
  } else if (currentUser.age < 18) {
    analysis += `<p>You're a teenager! Exciting times ahead! 🌟</p>`;
  } else if (currentUser.age < 65) {
    analysis += `<p>You're an adult! Time to conquer the world! 💪</p>`;
  } else {
    analysis += `<p>You're wise and experienced! 🧓</p>`;
  }

  // Color-based personality analysis
  const colorPersonalities = {
    red: "passionate and energetic",
    blue: "calm and trustworthy",
    green: "natural and balanced",
    purple: "creative and mysterious",
    orange: "enthusiastic and friendly",
  };

  analysis += `<p>Your favorite color ${
    currentUser.color
  } suggests you are <strong>${
    colorPersonalities[currentUser.color]
  }</strong>! 🎨</p>`;

  // Mathematical operations
  const birthYear = new Date().getFullYear() - currentUser.age;
  analysis += `<p>You were probably born around <strong>${birthYear}</strong>! 📅</p>`;

  // Display results and show the hidden div
  const resultDiv = document.getElementById("userAnalysis");
  resultDiv.innerHTML = analysis;
  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("fade-in");

  // Console logging for debugging
  console.log("User Analysis Complete:", currentUser);
}
function calculateSum(a, b) {
  // Type checking and conversion
  const num1 = parseFloat(a) || 0;
  const num2 = parseFloat(b) || 0;
  const result = num1 + num2;

  // Return object with multiple values
  return {
    sum: result,
    average: result / 2,
    isPositive: result > 0,
  };
}

// Function 2: Text formatter with multiple operations
function formatTextString(text) {
  if (!text || typeof text !== "string") {
    return "Invalid input";
  }

  return {
    original: text,
    uppercase: text.toUpperCase(),
    lowercase: text.toLowerCase(),
    wordCount: text.split(" ").length,
    charCount: text.length,
    reversed: text.split("").reverse().join(""),
    firstLetter: text.charAt(0),
    lastLetter: text.charAt(text.length - 1),
  };
}

// Helper function that uses our calculator function
function performCalculation() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  if (!num1 || !num2) {
    document.getElementById("calcResult").innerHTML =
      '<p style="color: red;">Please enter both numbers!</p>';
    return;
  }

  const result = calculateSum(num1, num2);

  document.getElementById("calcResult").innerHTML = `
                <div class="result-box">
                    <h4>Calculation Results:</h4>
                    <p><strong>Sum:</strong> ${result.sum}</p>
                    <p><strong>Average:</strong> ${result.average}</p>
                    <p><strong>Is Positive:</strong> ${
                      result.isPositive ? "Yes" : "No"
                    }</p>
                </div>
            `;

  console.log("Calculation performed:", result);
}

// Helper function that uses our text formatter function
function formatText() {
  const text = document.getElementById("textInput").value;
  const formatted = formatTextString(text);

  if (formatted === "Invalid input") {
    document.getElementById("textResult").innerHTML =
      '<p style="color: red;">Please enter some text!</p>';
    return;
  }

  document.getElementById("textResult").innerHTML = `
                <div class="result-box">
                    <h4>Text Analysis:</h4>
                    <p><strong>Original:</strong> "${formatted.original}"</p>
                    <p><strong>Uppercase:</strong> "${formatted.uppercase}"</p>
                    <p><strong>Lowercase:</strong> "${formatted.lowercase}"</p>
                    <p><strong>Word Count:</strong> ${formatted.wordCount}</p>
                    <p><strong>Character Count:</strong> ${formatted.charCount}</p>
                    <p><strong>Reversed:</strong> "${formatted.reversed}"</p>
                    <p><strong>First Letter:</strong> "${formatted.firstLetter}"</p>
                    <p><strong>Last Letter:</strong> "${formatted.lastLetter}"</p>
                </div>
            `;

  console.log("Text formatted:", formatted);
}

// ===============================================
// 🔁 PART 3: JAVASCRIPT LOOPS
// For, While, and forEach Examples
// ===============================================

// Loop 1: While loop for countdown timer
function startCountdown() {
  let count = 10;
  const countdownElement = document.getElementById("countdown");

  // Disable button during countdown
  event.target.disabled = true;
  event.target.textContent = "Counting...";

  const countdownInterval = setInterval(() => {
    countdownElement.textContent = count;
    countdownElement.style.color = count <= 3 ? "#fc8181" : "#667eea";

    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "🎉 Done!";
      countdownElement.style.color = "#48bb78";

      // Re-enable button
      event.target.disabled = false;
      event.target.textContent = "Start 10 Second Countdown";

      console.log("Countdown completed!");
    }
  }, 1000);
}

// Loop 2: For loop to generate number patterns
function generatePattern() {
  let pattern = '<div class="result-box"><h4>Number Patterns:</h4>';

  // For loop example 1: Simple counting
  pattern += "<p><strong>Counting 1-10:</strong> ";
  for (let i = 1; i <= 10; i++) {
    pattern += i + (i < 10 ? ", " : "");
  }
  pattern += "</p>";

  // For loop example 2: Even numbers
  pattern += "<p><strong>Even numbers 2-20:</strong> ";
  for (let i = 2; i <= 20; i += 2) {
    pattern += i + (i < 20 ? ", " : "");
  }
  pattern += "</p>";

  // For loop example 3: Multiplication table
  pattern += "<p><strong>5 times table:</strong> ";
  for (let i = 1; i <= 10; i++) {
    pattern += `5×${i}=${5 * i}` + (i < 10 ? ", " : "");
  }
  pattern += "</p>";

  pattern += "</div>";

  document.getElementById("pattern").innerHTML = pattern;
  console.log("Pattern generated using for loops");
}

// Loop 3: forEach loop with array manipulation
function displayFruits() {
  const fruits = [
    "🍎 Apple",
    "🍌 Banana",
    "🍊 Orange",
    "🍇 Grapes",
    "🍓 Strawberry",
    "🥝 Kiwi",
  ];
  let fruitHTML = '<div class="result-box"><h4>Fruit Collection:</h4>';

  // forEach loop to process each fruit
  fruits.forEach((fruit, index) => {
    fruitHTML += `
                    <div style="padding: 8px; margin: 5px 0; background: #f0f8ff; border-radius: 5px; border-left: 3px solid #667eea;">
                        <strong>#${index + 1}</strong> ${fruit}
                    </div>
                `;
  });

  // Additional forEach example: filtering and transforming
  const favoriteFruits = [];
  fruits.forEach((fruit) => {
    if (fruit.includes("Apple") || fruit.includes("Banana")) {
      favoriteFruits.push(fruit);
    }
  });

  fruitHTML += "<h4>My Favorite Fruits:</h4>";
  favoriteFruits.forEach((fruit) => {
    fruitHTML += `<p style="color: #667eea; font-weight: bold;">${fruit}</p>`;
  });

  fruitHTML += "</div>";

  document.getElementById("fruitList").innerHTML = fruitHTML;
  console.log("Fruits displayed using forEach:", fruits);
}

// ===============================================
// 🌐 PART 4: DOM MANIPULATION
// Element Selection, Event Handling, Dynamic Updates
// ===============================================

// DOM Interaction 1: Toggle visibility and modify classes
function toggleContent() {
  const secretMessage = document.getElementById("secretMessage");

  if (secretMessage.classList.contains("hidden")) {
    // Show the message
    secretMessage.classList.remove("hidden");
    secretMessage.classList.add("fade-in");
    event.target.textContent = "Hide Secret Message";
  } else {
    // Hide the message
    secretMessage.classList.add("hidden");
    secretMessage.classList.remove("fade-in");
    event.target.textContent = "Toggle Secret Message";
  }

  console.log(
    "Content toggled. Hidden status:",
    secretMessage.classList.contains("hidden")
  );
}

// DOM Interaction 2: Dynamic element creation and removal
let todoCounter = 0;

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (!todoText) {
    alert("Please enter a task!");
    return;
  }

  todoCounter++;

  // Create new todo element
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item fade-in";
  todoItem.id = `todo-${todoCounter}`;

  todoItem.innerHTML = `
                <span onclick="toggleTodoComplete(${todoCounter})" style="cursor: pointer;">
                    📋 ${todoText}
                </span>
                <button class="delete-btn" onclick="deleteTodo(${todoCounter})">Delete</button>
            `;

  // Add to DOM
  const todoList = document.getElementById("todoList");
  todoList.appendChild(todoItem);

  // Clear input
  todoInput.value = "";

  console.log(`Todo added: ${todoText} (ID: ${todoCounter})`);
}

function toggleTodoComplete(id) {
  const todoElement = document.getElementById(`todo-${id}`);
  todoElement.classList.toggle("completed");
  console.log(`Todo ${id} completion toggled`);
}

function deleteTodo(id) {
  const todoElement = document.getElementById(`todo-${id}`);
  todoElement.remove();
  console.log(`Todo ${id} deleted`);
}

// DOM Interaction 3: Style manipulation and attribute changes
let themeToggled = false;

function changeTheme() {
  const themeText = document.getElementById("themeText");
  const button = event.target;

  if (!themeToggled) {
    // Apply dark theme
    themeText.style.background = "linear-gradient(45deg, #2d3748, #4a5568)";
    themeText.style.color = "white";
    themeText.style.padding = "20px";
    themeText.style.borderRadius = "10px";
    themeText.style.transform = "scale(1.05)";
    themeText.style.transition = "all 0.3s ease";
    themeText.textContent =
      "🌙 Dark theme activated! Click again to switch back.";

    button.textContent = "Switch to Light Theme";
    button.style.background = "linear-gradient(45deg, #4a5568, #2d3748)";
  } else {
    // Return to light theme
    themeText.style.background = "none";
    themeText.style.color = "#333";
    themeText.style.padding = "0";
    themeText.style.transform = "scale(1)";
    themeText.textContent =
      "☀️ Light theme restored! The power of DOM manipulation!";

    button.textContent = "Change Theme";
    button.style.background = "linear-gradient(45deg, #667eea, #764ba2)";
  }

  themeToggled = !themeToggled;
  console.log("Theme toggled. Current theme:", themeToggled ? "dark" : "light");
}

// Additional DOM interaction: Event listener for Enter key on todo input
document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todoInput");
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  console.log("Dashboard loaded successfully! All event listeners attached.");
});

// ===============================================
// BONUS: Utility functions and console demonstrations
// ===============================================

// Demonstrate different data types and operators
function demonstrateJavaScriptConcepts() {
  console.log("=== JavaScript Concepts Demonstration ===");

  // Variables and data types
  const stringVar = "Hello World";
  const numberVar = 42;
  const booleanVar = true;
  const arrayVar = [1, 2, 3, "four", true];
  const objectVar = {
    name: "JavaScript",
    type: "Programming Language",
    year: 1995,
  };

  console.log("String:", stringVar);
  console.log("Number:", numberVar);
  console.log("Boolean:", booleanVar);
  console.log("Array:", arrayVar);
  console.log("Object:", objectVar);

  // Operators
  console.log("Arithmetic: 10 + 5 =", 10 + 5);
  console.log("Comparison: 10 > 5 is", 10 > 5);
  console.log("Logical: true && false is", true && false);

  // Conditionals
  const testScore = 85;
  let grade;

  if (testScore >= 90) {
    grade = "A";
  } else if (testScore >= 80) {
    grade = "B";
  } else if (testScore >= 70) {
    grade = "C";
  } else {
    grade = "F";
  }

  console.log(`Score: ${testScore}, Grade: ${grade}`);
}

// Run the demonstration
demonstrateJavaScriptConcepts();
