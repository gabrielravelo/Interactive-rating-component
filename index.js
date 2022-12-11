const rating = document.querySelector('.rating');
const thankYou = document.querySelector('.thank-you');
const submit = document.getElementById('boton-submit');
const rateSubmit = document.getElementById('rating-submit');
const ratingText = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

let text;

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    text = rate.innerHTML;
  })
})

submit.addEventListener('click', () => {
  // console.log('clickeaste')
  thankYou.classList.remove('hidden');
  rating.classList.add('hidden');
  ratingText.innerHTML = text;
});

rateSubmit.addEventListener('click', () => {
  location.reload();
});

