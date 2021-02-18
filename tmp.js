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
  for (let i = 0; i < welt.length; i++) {
    let zeile = "";
    for (let j = 0; j < welt[i].length; j++) {
      zeile += welt[i][j] ? "\u2593" : "\u2591";
    }
    console.log(zeile);
  }
}

function wendeRegelnAn(welt) {
  let clone = welt;
  for (let i = 0; i < welt.length; i++) {
    for (let j = 0; j < welt[i].length; j++) {
      let zelle = welt[i][j];
      let nachbarn = angrenzendeZellen(welt, j, i);
      if(!zelle && nachbarn === 3){
        clone[i][j] = true;
      }
      if(zelle && nachbarn < 2){
        clone[i][j] = false;
      }
      if(zelle && nachbarn > 3){
        clone[i][j] = false;
      }
    }
  }
  return clone;
}

function angrenzendeZellen(welt, x, y){
  let n = 0;
  for(let i = -1; i<2; i++){
    for(let j = -1; j < 2; j++){
      if(welt[y-i] !== undefined && welt[y-i][x-j] !== undefined && welt[y-i][x-j] && !(x-j === x && y-i === y)){
        n++;
      }
    }
  }
  return n;
}

function wait(timeout) {
  return new Promise(resolve => {
      setTimeout(resolve, timeout);
  });
}



async function main() {
  let welt = initWelt();
  console.log("Startkonstellation");
  zeigeWelt(welt);
  for (let i = 1; i <= 100; i++) {
    await wait(500);
    welt = wendeRegelnAn(welt);
    console.log("Generation " + i);
    zeigeWelt(welt);
  }
}
main();
