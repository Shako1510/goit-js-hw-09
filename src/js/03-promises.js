import { Notify } from 'notiflix/build/notiflix-notify-aio';


const delayEll = document.querySelector('input[name="delay"]');
const stepEll = document.querySelector('input[name="step"]');
const amountEll = document.querySelector('input[name="amount"]');
const formEll = document.querySelector('.form');
const btnSubmit = document.querySelector('button[type="submit"]');
console.log(btnSubmit);

let position = 0;

formEll.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delayStep = delayEll.value;
  const step = stepEll.value;
  const amount = amountEll.value;

  for (position = 1; position <= amount; position++) {
    const delay = (position - 1) * step + +delayStep;
    createPromise(position, delay)
      .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
  }
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
        // Fulfill
      } else {
        reject({ position, delay })
        // Reject
      }
    }, delay);
  });

}


