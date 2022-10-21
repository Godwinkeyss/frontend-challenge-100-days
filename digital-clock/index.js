const hrEl = document.getElementById('hour');
const minEl = document.getElementById('minute');
const secEl = document.getElementById('second');
const ampmEl = document.getElementById('ampm');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM'


  if(h >12){
    h = h - 12
    ampm = 'PM'
  }

  if(h < 10){
    h = '0' + h
  }
  if(s < 10){
    s = '0' + s
  }
  if(m < 10){
    m = '0' + m
  }
  
  hrEl.innerHTML = h;
  minEl.innerHTML = m;
  secEl.innerHTML = s;
  ampmEl.innerHTML = ampm

 
 
}

setInterval(() => {
    updateClock();
  },1000);

