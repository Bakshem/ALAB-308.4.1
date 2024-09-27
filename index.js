const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let rows = csvData.split('\n');

console.log(rows);
let data = [];
for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(',');
    let row = [];
    for (let j = 0; j < cells.length; j++) {
        row.push(cells[j]);
    }
    data.push(row);
}

console.log(data);

