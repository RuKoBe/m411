import dedent from "dedent";
import React from "react";
import Template from "./Template";

const GameOfLife = () => {
  const code = dedent`const DIM1 = 12;
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
  `;

  const problem = (
    <>
      <p>
        Das Spiel des Lebens (engl. Conway’s Game of Life) ist ein vom
        Mathematiker John Horton Conway 1970 entworfenes Spiel, basierend auf
        einem zweidimensionalen zellulären Automaten. Es ist eine einfache und
        bis heute populäre Umsetzung der Automaten-Theorie von Stanisław Marcin
        Ulam.
      </p>
      <p>Es gibt folgende Regeln:</p>
      <ol>
        <li>
          Eine tote Zelle mit genau drei lebenden Nachbarn wird in der
          Folgegeneration neu geboren.
        </li>
        <li>
          Lebende Zellen mit weniger als zwei lebenden Nachbarn sterben in der
          Folgegeneration an Einsamkeit.
        </li>
        <li>
          Eine lebende Zelle mit zwei oder drei lebenden Nachbarn bleibt in der
          Folgegeneration am Leben.
        </li>
        <li>
          Lebende Zellen mit mehr als drei lebenden Nachbarn sterben in der
          Folgegeneration an Überbevölkerung.
        </li>
      </ol>
      <p>
        Source: <a href="//wikipedia.com">Wikipedia</a>
      </p>
    </>
  );
  return (
    <Template
      title="Conways Game of Life"
      flow={null}
      code={code}
      problem={problem}
      pseudo={null}
    />
  );
};

export default GameOfLife;
