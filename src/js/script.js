const rateEl = document.querySelector('.rate');
const starsEl = rateEl.querySelectorAll('.rate__star');

let isRated;

rateEl.addEventListener('mouseover', function(e) {
  resetAllStars();
  
  const targetId = e.target.dataset.id;

  if(targetId) {
    for (let i = 0; i < starsEl.length; i++) {
      const star = starsEl[i];
      star.src = 'images/filled-star.svg';
      if(star.dataset.id == targetId) {
        break;
      }
    }
  }
})

rateEl.addEventListener('mouseleave', () => {
  if(!isRated) {
    resetAllStars()
  }
})

rateEl.addEventListener('click', function(e) {
  const target = e.target;
  const targetId = e.target.dataset.id;
  if(targetId) {
    setRate(targetId)
  }
})  

function resetAllStars() {
  isRated = false;
  starsEl.forEach(star => star.src = 'images/star.svg');
}