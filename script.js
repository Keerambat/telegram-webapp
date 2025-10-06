const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const audio = new Audio(btn.dataset.sound);
        audio.play();
    });
});


