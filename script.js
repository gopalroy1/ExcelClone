let table = document.getElementById("main-table");
let row1 = document.getElementById("row-1");
let tHead = document.getElementById("table-head");
let elementSelected = document.getElementById("element-selected");
let currentCell;
let boldBtn= document.getElementById("bold-button")
let italicBtn= document.getElementById("italic-button")
let underlineBtn= document.getElementById("underline-button");
let fontSizeOption = document.getElementById("font-size");
let fontFamilyOption = document.getElementById("font-family");
let middleAlingBtn = document.getElementById("middle");
let leftAlingBtn = document.getElementById("left");
let rightAlingBtn = document.getElementById("right");
let cutBtn = document.getElementById("cut")
let copyBtn = document.getElementById("copy");
let pasteBtn = document.getElementById("paste");
let toBePasted={
    text :"",
    style :""
};

//Creating A to Z rows of the sheet
for (let i = 65; i <= 90; i++) {
    //Creating td of the first row for A to Z and then appending it 
    let td = document.createElement("td");
    let alphaText = String.fromCharCode(i);
    td.innerText=alphaText;

    //appending to the first row
    row1.appendChild(td);
}

//Creating all the rows of the main table
for(let i =1;i<= 200;i++){
    let td = document.createElement("td");
    td.innerText=i;
    let tr = document.createElement("tr");
    tr.appendChild(td);
    for(let j = 65;j<=90;j++){
        let tId = String.fromCharCode(j)+i;
        let tdMain = document.createElement("td");
        tdMain.setAttribute("contenteditable","true");
        tdMain.addEventListener("focus",(event)=>{
            addFocus(event);
        })
        tdMain.id=tId;
        tr.appendChild(tdMain);
    }
    
    tHead.appendChild(tr);
}
function addFocus(event){
    currentCell = event.target;
    elementSelected.innerText= event.target.id;
    saveInMatrix(currentCell);
}

//Creating funtionalities for saving the Excel sheet 
//Saving as soon as any changes happens to the sheet content
//Generating a matrix of size of the sheet and saving the details
let mat = new Array(100);
for (let i = 0; i < mat.length; i++) {
    mat[i]= new Array(26);
}
//Making a function which will take current element and then store in the matrix
function saveInMatrix(currentCell){
    console.log(currentCell);
    let ob = {};
    ob.text = currentCell.innerText;
    ob.id = currentCell.id;
    ob.style= currentCell.style.cssText;
    
    //Saving object ln the matrix
    let ind = ob.id.split("");
    let i = ind[1]-1;
    let j = ind[0].charCodeAt(0)-65;
    mat[i][j]= ob;
}

//Onclick functionalties 

boldBtn.addEventListener("click",(event)=>{
    if (currentCell.style.fontWeight=="bold") {
        currentCell.style.fontWeight = "normal";
    } else {
        currentCell.style.fontWeight = "bold";
    }
    saveInMatrix(currentCell);

    
});
italicBtn.addEventListener("click",()=>{
    if (currentCell.style.fontStyle=="italic") {
        currentCell.style.fontStyle= "normal";
    } else {
        currentCell.style.fontStyle="italic";
    }
    saveInMatrix(currentCell);
});
underlineBtn.addEventListener("click",()=>{
    if (currentCell.style.textDecoration=="underline") {
        currentCell.style.textDecoration="none";
    } else {
        currentCell.style.textDecoration="underline";
    }
    saveInMatrix(currentCell);
});

fontSizeOption.addEventListener("change",()=>{
    console.log('inside select');
    currentCell.style.fontSize = fontSizeOption.value;
    saveInMatrix(currentCell);
})
fontFamilyOption.addEventListener("change",()=>{
    currentCell.style.fontFamily = fontFamilyOption.value;
    saveInMatrix(currentCell);
})
leftAlingBtn.addEventListener("click",()=>{
    currentCell.style.textAlign = leftAlingBtn.innerText;
    saveInMatrix(currentCell);
});
middleAlingBtn.addEventListener("click",()=>{
    currentCell.style.textAlign = "center";
    saveInMatrix(currentCell);
});
rightAlingBtn.addEventListener("click",()=>{
    
    currentCell.style.textAlign = "right";
    saveInMatrix(currentCell);
});
cutBtn.addEventListener("click",()=>{
    toBePasted.text = currentCell.innerText;
    toBePasted.style = currentCell.style.cssText;
    currentCell.innerText="";
    saveInMatrix(currentCell);
})
copyBtn.addEventListener("click",()=>{
    toBePasted.text = currentCell.innerText;
    toBePasted.style = currentCell.style.csstext;
})
pasteBtn.addEventListener("click",()=>{
    currentCell.innerText=toBePasted.text;
    currentCell.style.cssText=toBePasted.style;
    saveInMatrix(currentCell);
})