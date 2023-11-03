document.addEventListener("DOMContentLoaded", (e) => {
    const formDemo = document.getElementById("formDemo");
    formDemo.addEventListener("submit", (e) => {

        const dropDown1 = document.getElementById("firstDropDown").value;
        const dropDown2 = document.getElementById("secondDropDown").value;
        const dropDown3 = document.getElementById("thirdDropDown").value;
        const dropDown4 = document.getElementById("fourthDropDown").value;
        const dropDown5 = document.getElementById("fifthDropDown").value;

        const chosenLanguage = languageFromInputs(firstDropDown, secondDropDown, thirdDropDown, fourthDropDown, fifthDropDown);


        document.getElementById('langResult').innerText = chosenLanguage;
        document.querySelector("p#langOutput").removeAttribute("class")

        e.preventDefault();

    })
    function languageFromInputs(firstDropDown, secondDropDown, thirdDropDown, fourthDropDown, fifthDropDown) {
        if (firstDropDown === "shake hard" && secondDropDown === "shake right" && thirdDropDown === "shake down" && fourthDropDown === "i'm tired!" && fifthDropDown === "*kiss*") {
            return "ruby";
        } else if (firstDropDown === "shake soft" && secondDropDown === "shake left" && thirdDropDown === "shake up" && fourthDropDown === "shake around" && fifthDropDown === "no!") {
            return "javascript";
        } else {
            return "python"
        }

    }
})

function refreshPage() {
    window.location.reload();
} 