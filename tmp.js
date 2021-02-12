const DIM1 = 12;
const DIM2 = 12;

function initWelt() {
  let welt = [];
  for (let i = 0; i < DIM1; i++) {
    let zeile = [];
    for (let j = 0; j < DIM2; j++) {
      zeile.push(Math.random() > 0.4);
    }
    welt.push(zeile);
  }
  return welt;
}

function zeigeWelt(welt) {
  let o = "";
  for (let i = 0; i < welt.length; i++) {
    let zeile = "";
    for (let j = 0; j < welt[i].length; j++) {
      zeile += welt[i][j] ? "#" : " ";
    }
    o += zeile + "\n";
  }
  console.log(o);
}

function wendeRegelnAn(welt) {}

function main() {
  let welt = initWelt();
  console.log("Startkonstellation");
  zeigeWelt(welt);
  for (let i = 1; i <= 100; i++) {
    welt = wendeRegelnAn(welt);
    console.log("Generation " + i);
    zeigeWelt(welt);
    console.clear();
  }
  zeigeWelt(welt);
}

zeigeWelt(initWelt());
