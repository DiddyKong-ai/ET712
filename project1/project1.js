console.log("Dillon Robertson")

// Event listeners for each button
document.getElementById("countbtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Learn to Count!</h2>
        <p>Let's count together!</p>
        <div>
            <button onclick="countNumber(1)">1</button>
            <button onclick="countNumber(2)">2</button>
            <button onclick="countNumber(3)">3</button>
            <button onclick="countNumber(4)">4</button>
            <button onclick="countNumber(5)">5</button>
        </div>
    `;
});

document.getElementById("colorsbtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Learn Colors!</h2>
        <p>Click on a color to see it!</p>
        <div>
            <button style="background-color: red;" onclick="showColor('Red')">Red</button>
            <button style="background-color: blue;" onclick="showColor('Blue')">Blue</button>
            <button style="background-color: pink;" onclick="showColor('Pink')">Pink</button>
            <button style="background-color: yellow;" onclick="showColor('Yellow')">Yellow</button>
        </div>
    `;
});

document.getElementById("shapesbtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Learn Shapes!</h2>
        <p>Click on a shape to learn about it!</p>
        <div>
            <button onclick="showShape('Circle')">Circle</button>
            <button onclick="showShape('Square')">Square</button>
            <button onclick="showShape('Triangle')">Triangle</button>
            <button onclick="showShape('Rectangle')">Rectangle</button>
        </div>
    `;
});

// Set up event listeners for buttons
circleButton.addEventListener('click', () => {
    shapeImage.src = 'Circle.png'; // Circle Image URL
    shapeImage.alt = 'Circle';
    shapeImage.style.display = 'block'; // Show image
});

squareButton.addEventListener('click', () => {
    shapeImage.src = 'Square.png'; // Square Image URL
    shapeImage.alt = 'Square';
    shapeImage.style.display = 'block'; // Show image
});

triangleButton.addEventListener('click', () => {
    shapeImage.src = 'Triangle.png'; // Triangle Image URL
    shapeImage.alt = 'Triangle';
    shapeImage.style.display = 'block'; // Show image
});

rectangleButton.addEventListener('click', () => {
    shapeImage.src = 'rectangle.gif'; // Rectangle Image URL
    shapeImage.alt = 'Rectangle';
    shapeImage.style.display = 'block'; // Show image
});

// Function to show color
function showColor(color) {
    document.getElementById("content").innerHTML = `
        <h2>You clicked ${color}!</h2>
        <p>The color is: ${color}</p>
    `;
}

// Function to show shape
function showShape(shape) {
    document.getElementById("content").innerHTML = `
        <h2>You clicked the ${shape}!</h2>
        <p>This is a ${shape} shape!</p>
    `;
}

// Function to count numbers
function countNumber(number) {
    document.getElementById("content").innerHTML = `
        <h2>You clicked ${number}!</h2>
        <p>That's the number ${number}!</p>
        <p>Now, let's try the next number.</p>
        <div>
            <button onclick="countNumber(${number + 1})">${number + 1}</button>
        </div>
    `;
}
