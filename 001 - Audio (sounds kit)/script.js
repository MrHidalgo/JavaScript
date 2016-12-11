
function playSounds(e) {
    const   audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
            key   = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) {
        return; // stop the function from running all together
    }

    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
}

function removeAnimationClass(e) {
    // e.propertyName -> style option (border-color, box-shadow, transform)

    if(e.propertyName !== 'transform') {
        return; // skip it if it's not a transform
    }

    this.classList.remove("playing");
}

// find all key
const keys = document.querySelectorAll(".key");

// check transition enf || no
keys.forEach((key) => {
    key.addEventListener("transitionend", removeAnimationClass)
});

document.addEventListener("keydown", playSounds);