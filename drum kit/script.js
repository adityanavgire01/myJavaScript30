
function playSound(e) {
    // e is an event object -> passed automatically when an event occrs such as 'click/ keypress'
    // finding the audio element that matched the pressed key code
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // finding the key div ele that matches the pressed key code
    const key = document.querySelector(`div[data-key= "${e.keyCode}"]`);

    // if no audio element found stop the function
    if (!audio) return;

    // add the 'playing' class for the visual effect in css
    key.classList.add('playing');

    // Reset the audio to start - allowing rapid triggering
    audio.currentTime = 0;

    // play the sound
    audio.play();

}

function removeTransition(e) {
    // transform transition 
    if (e.propertyName !== 'transform') return;

    // remove the playing class
    e.target.classList.remove('playing');
}

// get all the keys
const keys = Array.from(document.querySelectorAll('.key'));

// add transition end listener to each key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);