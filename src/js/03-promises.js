import { Notify } from 'notiflix/build/notiflix-notify-aio';


const delayEll = document.querySelector('input[name="delay"]');
console.log(delayEll);
const stepEll = document.querySelector('input[name="step"]');
console.log(stepEll);
const amountEll = document.querySelector('input[name="amount"]');
console.log(amountEll);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
