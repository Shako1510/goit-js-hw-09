
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEll = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

const timer = {
    timerId: null,
    // isActive: false,
    start() {
        // if (this.isActive) {
        //     return
        // }
        buttonStart.setAttribute('disabled', true)
        buttonStop.removeAttribute('disabled', true)

        this.timerId = setInterval(() => {

            let color = getRandomHexColor();
            bodyEll.style.backgroundColor = color;

        }, 1000);
    },
    stop() {
        clearInterval(this.timerId);
        buttonStop.setAttribute('disabled', true);
        buttonStart.removeAttribute('disabled');
    }
};

buttonStart.addEventListener('click', () => {
    timer.start();
});

buttonStop.addEventListener('click', () => {
    timer.stop();
});


// let timer = {
//     timerId: null
// };
// buttonStart.addEventListener('click', changeColorBodyStart);

// function changeColorBodyStart(event) {

//     if (this.timerId) {
//         buttonStart.setAttribute('disabled', true)
//     }

//     this.timerId = setInterval(() => {

//         let color = getRandomHexColor();
//         bodyEll.style.backgroundColor = color;

//     }, 2000);

//     buttonStop.addEventListener('click', () => {
//         clearInterval(this.timerId);
//         buttonStop.removeAttribute('disabled', false);
//     })
// }


