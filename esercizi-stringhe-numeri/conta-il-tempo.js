/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il ris. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

const input = 12560;

let ore = input / 3600; // 3600 secondi in un'ora
let secondiRimasti = input % 3600; // resto dei secondi rimasti dal calcolo ore
let minuti = secondiRimasti / 60; // prendo i minuti dai secondi rimasti prima
let secondiFinali = secondiRimasti % 60; // secondi effettivi che rimangono

// tentativi e debug

// console.log(Math.floor(ore) + ' ore');
// console.log(secondiRimasti);
// console.log(Math.floor(minuti) + ' minuti');
// console.log(secondiFinali + ' secondi');

// semplificato
ore = Math.floor(ore);
minuti = Math.floor(minuti);

// inserito in una sola stringa
console.log(`${ore + " ore"} ${minuti + " minuti"} ${secondiFinali + " secondi"}`)
