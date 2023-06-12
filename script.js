
let table = document.getElementById("main-table");
let row1 = document.getElementById("row-1");
let tHead = document.getElementById("table-head");

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
        tdMain.id=tId;
        tr.appendChild(tdMain);
    }
    
    tHead.appendChild(tr);
}