const reds = [
    "Crimson",
    "DarkRed",
    "FireBrick",
    "IndianRed",
    "Maroon",
    "Red"
];
const pinks = [
    "DeepPink",
    "Fuchsia",    
    "HotPink",
    "LavenderBlush",
    "LightCoral",
    "LightPink",
    "LightSalmon",
    "Magenta",
    "MediumVioletRed",
    "MistyRose",
    "PaleVioletRed",
    "Pink",
    "Salmon",
    "Violet"
];
const blues = [
    "AliceBlue",
    "Blue",
    "CornflowerBlue",
    "DarkBlue",
    "DeepSkyBlue",
    "DodgerBlue",
    "LightBlue",
    "LightSkyBlue",
    "LightSteelBlue",
    "MediumBlue",
    "MidnightBlue",
    "Navy",
    "PowderBlue",
    "RoyalBlue",
    "SkyBlue",
    "SteelBlue"
];
const cyans = [
    "Aqua",
    "Aquamarine",
    "CadetBlue",
    "Cyan",
    "DarkCyan",
    "DarkTurquoise",
    "LightCyan",
    "LightSeaGreen",
    "MediumAquamarine",
    "MediumTurquoise",
    "PaleTurquoise",
    "Teal",
    "Turquoise"
];
const yellows = [
    "DarkGoldenRod",
    "DarkKhaki",
    "Gold",
    "GoldenRod",
    "Khaki",
    "LemonChiffon",
    "LightGoldenRodYellow",
    "LightYellow",
    "PaleGoldenRod",
    "Yellow"
];
const whites = [
    "Azure",
    "FloralWhite",
    "GhostWhite",
    "HoneyDew",
    "Ivory",
    "MintCream",
    "OldLace",
    "SeaShell",
    "Snow",
    "White",
    "WhiteSmoke"
];
const beiges = [
    "AntiqueWhite",
    "Beige",
    "Bisque",
    "BlanchedAlmond",
    "BurlyWood",
    "Cornsilk",
    "Linen",
    "Moccasin",
    "NavajoWhite",
    "PapayaWhip",
    "PeachPuff",
    "Wheat"
];
const greens = [
    "Chartreuse",
    "DarkGreen",
    "DarkOliveGreen",
    "ForestGreen",  
    "Green",
    "GreenYellow",  
    "LawnGreen",
    "LightGreen",
    "Lime",
    "LimeGreen",
    "MediumSpringGreen",
    "Olive",
    "OliveDrab",
    "PaleGreen",
    "SeaGreen",
    "SpringGreen",
    "YellowGreen"
];
const oranges = [
    "Chocolate",
    "Coral",
    "DarkOrange",
    "Orange",
    "OrangeRed",
    "Tomato"
];
const grays = [
    "Black",
    "DarkGray",
    "DarkSlateGray",
    "DimGray",
    "Gainsboro",
    "Gray",
    "LightGray",
    "LightSlateGray",
    "Silver",
    "SlateGray"
];
const purples = [
    "BlueViolet",
    "DarkMagenta",
    "DarkOrchid",
    "DarkSlateBlue",
    "DarkViolet",
    "Indigo",
    "Lavender",
    "MediumOrchid",
    "MediumPurple",
    "MediumSlateBlue",
    "Orchid",
    "Plum",
    "Purple",
    "RebeccaPurple",
    "SlateBlue",
    "Thistle"
];
const browns = [
    "Brown",
    "Chocolate",
    "Peru",
    "SaddleBrown",
    "RosyBrown",
    "SandyBrown",
    "Sienna",
    "Tan"
];

//list the colors within the category selected
function displayColors(color) {
    //clear the background color if any
    let body = document.getElementById("listColors");
    body.style.backgroundColor = "";

    //display colors of selected color category
    let list = '<ul id="colorList" style="list-style-type:none; font-size:15pt">\n';
    for(var i in color) {
        list += `<li class="color" value=${color[i]} draggable ="true" style="padding:3px">${color[i]}</li>\n`;
    }
    list += `</ul>`;
    document.getElementById("listColors").innerHTML = list;

    //get the currently displayed color elements by class name
    var currentColors = document.getElementsByClassName("color");
    
    //add click & drag event listeners to each color li element
    for (var i = 0; i < currentColors.length; i++) {
        let color = currentColors[i].getAttribute("value");
        //due to closure scope issue, need to bind the color variable
        currentColors[i].addEventListener("click", backgroundColor.bind(this, color), false); 
        //drag eventListeners
        currentColors[i].addEventListener("dragstart", dragStart);
        currentColors[i].addEventListener("dragend", dragEnd);
        
    }
}
//change the background color to the color clicked on
function backgroundColor(color1) {
    console.log("You clicked on: " + color1);
    let body = document.getElementById("listColors");
    body.style.backgroundColor = color1;
}

//declare global variable for drag item
let dragItem = null;
//also get the last color-box to adjust styling
let last = document.querySelectorAll(".color-box:last-of-type");

//drag & drop functions
function dragStart() {
    dragItem = this;
    setTimeout(() => this.id = 'invisible', 0);
}
function dragEnd() {
    this.id = 'item';
    dragItem = null;
}
function dragOver(e) {
    e.preventDefault();
    this.style.border="1px solid red";
}
function dragEnter(e) {
    e.preventDefault();
    this.style.border="1px solid red";
}
function dragLeave() {
     // check if element is the last color-box to re-style correctly
     if(this === last[0]) {
        this.style.border="1px solid black";
    }else {
        this.style.border="1px solid black";
        this.style.borderBottom="none";
    }
}
function dragDrop() {
    this.style.backgroundColor = dragItem.getAttribute("value");
    this.innerHTML = dragItem.getAttribute("value");
    // check if element is the last color-box to re-style correctly
    if(this === last[0]) {
        this.style.border="1px solid black";
    }else {
        this.style.border="1px solid black";
        this.style.borderBottom="none";
    }
    
}

//reset color-boxes function
function reset() {
    const boxes = document.querySelectorAll(".color-box");
    for(let i=0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
        boxes[i].innerHTML = '';
    }
}

function start() {
    //add event listeners to color menu
    let white = document.getElementById("white");
    white.addEventListener("click", function() {
        displayColors(whites);
    });
    let beige = document.getElementById("beige");
    beige.addEventListener("click", function() {
        displayColors(beiges);
    });
    let pink = document.getElementById("pink");
    pink.addEventListener("click", function() {
        displayColors(pinks);
    });
    let red = document.getElementById("red");
    red.addEventListener("click", function() {
        displayColors(reds);
    });
    let orange = document.getElementById("orange");
    orange.addEventListener("click", function() {
        displayColors(oranges);
    });
    let yellow = document.getElementById("yellow");
    yellow.addEventListener("click", function() {
        displayColors(yellows);
    });
    let green = document.getElementById("green");
    green.addEventListener("click", function() {
        displayColors(greens);
    });
    let blue = document.getElementById("blue");
    blue.addEventListener("click", function() {
        displayColors(blues);
    });
    let purple = document.getElementById("purple");
    purple.addEventListener("click", function() {
        displayColors(purples);
    });
    let gray = document.getElementById("gray");
    gray.addEventListener("click", function() {
        displayColors(grays);
    });
    let brown = document.getElementById("brown");
    brown.addEventListener("click", function() {
        displayColors(browns);
    });
    let cyan = document.getElementById("cyan");
    cyan.addEventListener("click", function() {
        displayColors(cyans);
    });
    let div = document.getElementById("listColors");
    div.addEventListener("click", backgroundColor, false);

    //add drag event listener to columns
    const boxes = document.getElementsByClassName("color-box");
    //using for...of loop to get values, not indexes
    for(var b of boxes) {
        b.addEventListener("dragover", dragOver);
        b.addEventListener('dragenter', dragEnter);
        b.addEventListener('dragleave', dragLeave);
        b.addEventListener('drop', dragDrop);
    }

    // reset button
    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", reset);

}

window.addEventListener("load", start, false);

