let gridWidth = 16;  // should be 16 by default
let gridHeight = 16; // should be 16 by default

function createGrid(){
    for (let i = 0; i < gridHeight; i++){
        for (let j = 0; j < gridWidth; j++){   // testing...
        const newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add("hovered");
        });
        container.appendChild(newDiv);
        }
    }
}

function promptUser(){
    let userInput = prompt("Please enter a grid size.");
    if (userInput <= 100 && userInput >= 1){
        console.log("Valid Input");
        remakeGrid()
    }
    else{
        console.log("Invalid");
    }
}

function remakeGrid(){
    // clear grid
    container.innerHTML = "";   // destroys all child nodes immediately
    // call createGrid using proper dimensions
    createGrid();
}

const container = document.querySelector("#container");
createGrid();
console.log("100 / 16 = " + 100/16);    // results in proper width

// const testDiv1 = document.createElement("div");
// const testDiv2 = document.createElement("div");
// const testDiv3 = document.createElement("div");
// const testDiv4 = document.createElement("div");

// container.appendChild(testDiv1);
// container.appendChild(testDiv2);
// container.appendChild(testDiv3);
// container.appendChild(testDiv4);

// testDiv1.classList.add("squares");
// testDiv2.classList.add("squares");
// testDiv3.classList.add("squares");
// testDiv4.classList.add("squares");