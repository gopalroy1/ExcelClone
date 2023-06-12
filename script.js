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
}

//Onclick functionalties 

boldBtn.addEventListener("click",(event)=>{
    if (currentCell.style.fontWeight=="bold") {
        currentCell.style.fontWeight = "normal";
    } else {
        currentCell.style.fontWeight = "bold";
    }
    
});
italicBtn.addEventListener("click",()=>{
    if (currentCell.style.fontStyle=="italic") {
        currentCell.style.fontStyle= "normal";
    } else {
        currentCell.style.fontStyle="italic";
    }
});
underlineBtn.addEventListener("click",()=>{
    console.log("afh");
    if (currentCell.style.textDecoration=="underline") {
        console.log("inif");
        currentCell.style.textDecoration="none";
    } else {
        console.log("else")
        currentCell.style.textDecoration="underline";
    }
});

fontSizeOption.addEventListener("change",()=>{
    console.log('inside select');
    currentCell.style.fontSize = fontSizeOption.value;
})
fontFamilyOption.addEventListener("change",()=>{
    currentCell.style.fontFamily = fontFamilyOption.value;
})
leftAlingBtn.addEventListener("click",()=>{
    currentCell.style.textAlign = leftAlingBtn.innerText;
});
middleAlingBtn.addEventListener("click",()=>{
    currentCell.style.textAlign = "center";
});
rightAlingBtn.addEventListener("click",()=>{
    
    currentCell.style.textAlign = "right";
});
cutBtn.addEventListener("click",()=>{
    toBePasted.text = currentCell.innerText;
    toBePasted.style = currentCell.style.cssText;
    currentCell.innerText="";
})
copyBtn.addEventListener("click",()=>{
    toBePasted.text = currentCell.innerText;
    toBePasted.style = currentCell.style.csstext;
})
pasteBtn.addEventListener("click",()=>{
    currentCell.innerText=toBePasted.text;
    currentCell.style.cssText=toBePasted.style;
})