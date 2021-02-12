import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import Template from "./Template";
import Highlight from "../ugly/Highlight";
import dedent from "dedent";
import flow from "../assets/img/collatz-flow.png";
import struct from "../assets/img/collatz-struct.png";

const Collatz = () => {
  const problem = (
    <>
      <p>
        Beginne mit irgendeiner natürlichen Zahl <Highlight>n&lt;0</Highlight>.
      </p>
      <p>
        Ist <Highlight>n</Highlight> gerade, so nimm als nächstes{" "}
        <Highlight>n/2</Highlight>.
      </p>
      <p>
        Ist <Highlight>n</Highlight> ungerade, so nimm als nächstes{" "}
        <Highlight>3n+1</Highlight>.
      </p>
      <p>Wiederhole die Vorgehensweise mit der erhaltenen Zahl.</p>
      <p>
        So erhält man zum Beispiel für die Startzahl <Highlight>n=19</Highlight>{" "}
        die Folge
      </p>
      <p>
        <Highlight>
          19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8,
          4, 2, 1, 4, 2, 1, 4, 2, 1, …
        </Highlight>
      </p>
      <p>
        Anscheinend mündet die Folge mit jedem <Highlight>n&lt;0</Highlight> in
        den Zyklus <Highlight>4, 2, 1</Highlight>. Die Collatz-Vermutung lautet:
      </p>
      <p>
        Jede so konstruierte Zahlenfolge mündet in den Zyklus{" "}
        <Highlight>4, 2, 1</Highlight>, egal, mit welcher natürlichen Zahl{" "}
        <Highlight>n&lt;0</Highlight> man beginnt.
      </p>
    </>
  );

  const pseudo = dedent`
  WIEDERHOLE BIS: Die Zahl eins ist
    WENN: Ist die Zahl gerade
      DANN: Die Zahl ist gleich die hälfte der Zahl
      SONST: Die Zahl ist das dreifache von sich selber plus eins`;

  const code = dedent`let n = prompt("Enter number:", 19);
    while(n > 1){
      console.log(n);
      n = n % 2 == 0 ? n/2 : n*3+1;
    }
    console.log(1);
  `;
  return (
    <Template
      title="Collatz Vermutung"
      problem={problem}
      code={code}
      flow={flow}
      struct={struct}
      pseudo={pseudo}
    />
  );
};
export default Collatz;
