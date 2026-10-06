
document.getElementById("form1").onsubmit = function (event) {
    event.preventDefault();

    let form = document.getElementById("form1");

    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;

    alert("First name: " + firstName
        + "\nLast name: " + lastName);
};
