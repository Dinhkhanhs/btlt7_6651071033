
function js_style() {
    let p = document.getElementById("text");

    p.style.fontSize = "24px";
    p.style.fontFamily = "Arial";
    p.style.color = "red";
}

document.getElementById("jsstyle").onclick = js_style;
