const currentDateSpan = document.getElementById('current-date'); 
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const ampmSpan = document.getElementById('ampm');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let ampm = hr >= 12 ? 'PM' : 'AM'; 

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    ampmSpan.textContent = ampm;

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    currentDateSpan.textContent = dateToday.toLocaleDateString('pt-BR', options);
}, 1000);


