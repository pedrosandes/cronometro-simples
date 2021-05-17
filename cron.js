let hh = 0;
let mm = 0;
let ss = 0;
let dd = 0;
let cron;

let tempo = 1000; // 1000ms equivale a 1s

function iniciar() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

function pausar() {
  clearInterval(cron);
}

function reiniciar() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;
  document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++;
    if (mm == 60) {
      mm = 0;
      hh++;

      if (hh == 24) {
        hh = 0;
      }
    }
  }
  let format =
    (hh < 10 ? '0' + hh : hh) +
    ':' +
    (mm < 10 ? '0' + mm : mm) +
    ':' +
    (ss < 10 ? '0' + ss : ss);
  document.getElementById('counter').innerText = format;

  return format;
}
