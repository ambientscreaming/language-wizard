document.addEventListener("DOMContentLoaded", (e) => {
    const formDemo = document.getElementById("formDemo");
    formDemo.addEventListener("submit", (e) => {

        const roomList = document.getElementById("roomList").value;
        const foodList = document.getElementById("foodList").value;

        const chosenLanguage = languageFromInputs(roomList, foodList);


        document.getElementById('langResult').innerText = chosenLanguage;
        document.querySelector("p#langOutput").removeAttribute("class")

        e.preventDefault();

    })
    function languageFromInputs(roomValue, foodValue) {
        if (roomValue === "jackhammer" && foodValue === "mashed potatoes") {
            return "ruby";
        } else if (roomValue === "jackhammer" && foodValue === "chowder") {
            return "javascript";
        } else if (roomValue === "jackhammer" && foodValue === "pancake batter") {
            return "c#";
        } else if (roomValue === "paintbrush" && foodValue === "mashed potatoes") {
            return "ruby";
        } else if (roomValue === "paintbrush" && foodValue === "chowder") {
            return "javascript";
        } else if (roomValue === "paintbrush" && foodValue === "pancake batter") {
            return "c#";
        } else if (roomValue === "single rose" && foodValue === "mashed potatoes") {
            return "ruby";
        } else if (roomValue === "single rose" && foodValue === "chowder") {
            return "c#";
        } else {
            return "javascript";
        }

    }
})