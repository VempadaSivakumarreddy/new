const progressSvg = document.querySelector('.progress');
const progressValueCircle = document.querySelector('.progress-value');
const percentageSpan = document.querySelector('.percentage');
const linearGradient = document.querySelector('#linearColors');

const RADIUS = 72;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const progress = percentage => {
  if(percentage > 75) {
    linearGradient.setAttribute('x1', '0');
    linearGradient.setAttribute('y1', '1');
  } else {
    linearGradient.setAttribute('x1', '1');
    linearGradient.setAttribute('y1', '0');
  }

  percentage == 0 ? percentage = 1 : null;

  const progress = percentage / 100;
  const dashoffset = CIRCUMFERENCE * (1 - progress);

  progressValueCircle.style.strokeDashoffset = dashoffset;
}

const fillPercentage = curValue => {
  const maxValue = 9999999;

  const percentage = parseInt((curValue / maxValue) * 100);

  progress(percentage);
  percentageSpan.innerText = `${curValue}`;
}

progressValueCircle.style.strokeDasharray = CIRCUMFERENCE;
fillPercentage(progressSvg.getAttribute('data-value'));