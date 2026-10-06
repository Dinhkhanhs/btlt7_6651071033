
document.getElementById("insertBtn").onclick = function () {
    let table = document.getElementById("sampleTable");

    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = "New cell1";
    cell2.innerHTML = "New cell2";
};
