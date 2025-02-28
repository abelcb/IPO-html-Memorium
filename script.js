function rotateRainbow(button) {
    button.classList.add('rotate-rainbow');
    setTimeout(() => {
        button.classList.remove('rotate-rainbow');
    }, 10000); // Dura lo mismo que la animación CSS
}
