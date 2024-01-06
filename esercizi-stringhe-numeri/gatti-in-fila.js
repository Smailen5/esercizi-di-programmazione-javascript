/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

function calcola() {

  const cats = parseInt(document.getElementById('catChoice').value); // seleziona quanti gatti vuoi
  const rowCatsChoice = parseInt(document.getElementById('rowChoice').value);  // quanti gatti per fila vuoi

  const rowsCat = Math.ceil(cats / rowCatsChoice);
  const missingCats = rowCatsChoice - cats % rowCatsChoice;

  const ris = document.getElementById('ris');
  ris.innerText = `${rowsCat} file di gatti`;

  // se ci sono gatti mancanti
  if (missingCats < rowCatsChoice) {
    const resultMissingCats = document.getElementById('resultMissingCats');
    resultMissingCats.innerText = `${missingCats} gatti mancanti`;
  } else {
    resultMissingCats.innerText = 'non ci sono gatti mancanti'
  }

}