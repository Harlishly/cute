
const girl = document.getElementById("change");
function changeBackground() {
    girl.textContent = "You cute!😊";
    girl.style.color = "#212121";
    document.body.style.backgroundImage = "url('download.jfif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background 0.5s ease-in-out";

    const thoughtText = document.getElementById("change");
    thoughtText.classList.add("move-up");


    const button = document.getElementById("actionButton");
    button.classList.add("hide");
}


