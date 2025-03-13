function rotateRainbow(button) {
    button.classList.add('rotate-rainbow');
    setTimeout(() => {
        button.classList.remove('rotate-rainbow');
    }, 10000); // Dura lo mismo que la animación CSS
}

function openNav(){
    let sidepanel = document.getElementById("mySidepanel");
    let toggleSymbol = document.getElementById("toggleSymbol");

    toggleSymbol.style.display = "none"; // Hide arrow
    sidepanel.style.width = "250px";
}
function closeNav(){
    let sidepanel = document.getElementById("mySidepanel");
    let arrtoggleSymbolow = document.getElementById("toggleSymbol");

    toggleSymbol.style.display = "block"; // Show arrow
    sidepanel.style.width = "20px";
}
function setDefaultStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","default-styles.css")
}
function setWarmStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","warmlook-styles.css")
}

function setWarmDarkStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","warmlook-dark-styles.css")
}
function setMinimalistStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","minimalist-styles.css")
}
function setMinimalistDarkStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","minimalist-dark-styles.css")
}
function setWaspDarkStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","waspdark-styles.css")
}
function setWaspStyle(){
    let styleLink = document.getElementById("styleLink");
    styleLink.setAttribute("href","wasp-styles.css");
}
