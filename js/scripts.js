document.addEventListener("DOMContentLoaded", (e) => {
    const formDemo = document.getElementById("formDemo");
    formDemo.addEventListener("submit", (e) => {

        const colorList = document.getElementById("colorList").value;

        document.getElementById('color').innerText = colorList;
        document.querySelector("p#colorOutput").removeAttribute("class")

        e.preventDefault();

    })

})
