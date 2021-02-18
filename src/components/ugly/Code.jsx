import { highlight, languages } from "prismjs";
import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import { Button } from "@material-ui/core";
import VirtualList from "react-tiny-virtual-list";

const Code = ({ code, callback }) => {
  const [o, setO] = useState(["Output"]);
  const [list, setList] = useState(<p>Output</p>);

  const run = () => {
    clear();
    eval(code.replaceAll("console.", ""));
  };

  const log = (txt) => {
    o.push(txt);
    setO(o);
    setList(
      <VirtualList
        width="100%"
        height={500}
        scrollToIndex={o.length - 1}
        itemCount={o.length}
        itemSize={30}
        renderItem={({ index, style }) => (
          <div key={index} style={style}>
            {o[index]}
          </div>
        )}
      />
    );
  };

  const clear = () => {
    setO(["Output"])
    setList(
      <VirtualList
        width="100%"
        height={500}
        scrollToIndex={o.length - 1}
        itemCount={o.length}
        itemSize={20}
        renderItem={({ index, style }) => (
          <div key={index} style={style}>
            {o[index]}
          </div>
        )}
      />
    );
  };

  return (
    <div>
      <Editor
        value={code}
        onValueChange={(code) => callback(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code",  monospace',
          fontSize: 12,
          backgroundColor: "#DDD",
          borderRadius: 5,
        }}
      ></Editor>
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ width: "100%" }}
        onClick={() => {
          run();
        }}
      >
        Ausf&uuml;hren
      </Button>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "#000",
          color: "#FFF",
          borderRadius: 5,
          height: 500,
          padding: 10,
        }}
      >
        {list}
      </div>
    </div>
  );
};

export default Code;
