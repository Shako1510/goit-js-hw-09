import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEll = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');


const timer = {
    start() {
        timerID = null;
        const startTime = Date.now();
        const date = new Date(inputEll.value).getTime();
        if (date <= startTime) {
            window.alert('sdsd')

            return;
        }
        startBtn.setAttribute('disabled', true);
        this.timerID = setInterval(() => {
            const startTime = Date.now();

            const date = new Date(inputEll.value).getTime();
            const carrentTime = date - startTime;
            // console.log(carrentTime);

            // startBtn.removeAttribute('disabled')

            const timeComponents = convertMs(carrentTime);
            console.log(timeComponents);

            daysValue.textContent = addLeadingZero(convertMs(carrentTime).days);
            hoursValue.textContent = addLeadingZero(convertMs(carrentTime).hours);
            minutesValue.textContent = addLeadingZero(convertMs(carrentTime).minutes);
            secondsValue.textContent = addLeadingZero(convertMs(carrentTime).seconds);

        }, 2000);
    },
    stop() {
        clearInterval(this.timerId);
    }
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
    timer.start();
    timer.stop();

})

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0])

    }
};


flatpickr(inputEll, { options });

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };


}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         console.log(selectedDates[0]);
//         if (selectedDates[0] <= Date.now()) {
//             window.alert('Please choose a date in the future');
//             return;
//         }
//         else {
//             startBtn.addEventListener('click', () => {
//                 timerID = setInterval(() => {
//                     const deltaTime = selectedDates[0] - Date.now();
//                     convertMs(deltaTime);
//                 }, 2000);
//             })

//         }
//     }
// };