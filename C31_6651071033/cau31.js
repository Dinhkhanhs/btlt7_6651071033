
document.getElementById("removeBtn").onclick = function () {
    let select = document.getElementById("colorSelect");

    let index = select.selectedIndex;

    if (index !== -1) {
        select.remove(index);
    }
};
