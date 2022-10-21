let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(()=>{
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`




// digital clock

let hour = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

// convert 24hours to  12hours

if(h>12){
    h = h - 12
}


// add zero before signle digit number

h=(h<10) ? '0' + h : h
m=(m<10) ? '0' + m : m
s=(s<10) ? '0' + s : s


hour.innerHTML = h;
minute.innerHTML = m;
seconds.innerHTML = s;
})


