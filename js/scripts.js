document.addEventListener("DOMContentLoaded", (e) => {
    const formDemo = document.getElementById("formDemo");
    formDemo.addEventListener("submit", (e) => {

        const dropDown1 = document.getElementById("firstDropDown").value;
        const dropDown2 = document.getElementById("secondDropDown").value;
        const dropDown3 = document.getElementById("thirdDropDown").value;
        const dropDown4 = document.getElementById("fourthDropDown").value;
        const dropDown5 = document.getElementById("fifthDropDown").value;

        const chosenLanguage = languageFromInputs(dropDown1, dropDown2, dropDown3, dropDown4, dropDown5);


        document.getElementById('langResult').innerText = chosenLanguage;
        document.querySelector("p#langOutput").removeAttribute("class")

        document.getElementById("formDemo").reset();

        e.preventDefault();

    })
    function languageFromInputs(firstDropDown, secondDropDown, thirdDropDown, fourthDropDown, fifthDropDown) {
        if (firstDropDown === "shake hard" && thirdDropDown === "shake up") {
            return "ruby!";
        } else if (secondDropDown === "shake left" && fourthDropDown === "shake around") {
            return "javascript!";
        } else if (fifthDropDown === "*kiss*" && firstDropDown === "shake soft") {
            return "c#!";
        } else if (secondDropDown === "shake right" && fourthDropDown === "i'm tired!") {
            return "rust!";
        } else {
            return "python!"
        }

    }
})

