let gridWidth = 16;  // should be 16 by default
let gridHeight = 16; // should be 16 by default

function createGrid(){
    // create the first row of 16 divs
    for (let i = 0; i < gridWidth; i++){   // testing...
        const newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        container.appendChild(newDiv);
    }
}

const container = document.querySelector("#container");
createGrid();
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