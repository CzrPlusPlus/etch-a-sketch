// Default grid dimensions
let gridWidth = 16; 
let gridHeight = 16; 

function createGrid(){
    for (let i = 0; i < gridHeight; i++){
        for (let j = 0; j < gridWidth; j++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add("hovered");
        });
        container.appendChild(newDiv);
        }
    }

    if (gridWidth != 16){
        // change CSS to accomodate new width values 
        let cssWidth = 100 / gridWidth;
        document.querySelectorAll('.squares').forEach(el => {
            el.style.width = `${cssWidth}%`;
        });
    }
}

function promptUser(){
    let userInput = prompt("Please enter a grid size. Max: 100x100");
    if (userInput <= 100 && userInput >= 1){
        console.log("Valid Input");
        gridWidth = userInput;
        gridHeight = userInput;
        remakeGrid()
    }
    else{
        console.log("Invalid");
    }
}

function remakeGrid(){
    // clear grid
    container.innerHTML = ""; 
    // create new grid
    createGrid();
}

const container = document.querySelector("#container");
createGrid();