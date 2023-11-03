var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

if (window.scrollY > 50) {
  navbar.classList.add('scrolled');
}

const initialTextH = document.getElementById('initial-text-H');
const additionalTextH = document.getElementById('additional-text-H');
const learnMoreLinkH = document.getElementById('learn-more-link-H');
const initialTextC = document.getElementById('initial-text-C');
const additionalTextC = document.getElementById('additional-text-C');
const learnMoreLinkC = document.getElementById('learn-more-link-C');
const initialTextN = document.getElementById('initial-text-N');
const additionalTextN = document.getElementById('additional-text-N');
const learnMoreLinkN = document.getElementById('learn-more-link-N');
let isExpanded = false;

//Hungry Bird
learnMoreLinkH.addEventListener('click', function (event) {
  event.preventDefault();
  if (isExpanded) {
    additionalTextH.style.display = 'none';
    learnMoreLinkH.textContent = 'read more';
  } else {
    additionalTextH.style.display = 'inline'; // inline untuk menyatukan teks
    learnMoreLinkH.textContent = 'show less';
  }
  isExpanded = !isExpanded;
});

//Calculator
learnMoreLinkC.addEventListener('click', function (event) {
  event.preventDefault();
  if (isExpanded) {
    additionalTextC.style.display = 'none';
    learnMoreLinkC.textContent = 'read more';
  } else {
    additionalTextC.style.display = 'inline';
    learnMoreLinkC.textContent = 'show less';
  }
  isExpanded = !isExpanded;
});

//Menghitung Nilai
learnMoreLinkN.addEventListener('click', function (event) {
  event.preventDefault();
  if (isExpanded) {
    additionalTextN.style.display = 'none';
    learnMoreLinkN.textContent = 'read more';
  } else {
    additionalTextN.style.display = 'inline';
    learnMoreLinkN.textContent = 'show less';
  }
  isExpanded = !isExpanded;
});
