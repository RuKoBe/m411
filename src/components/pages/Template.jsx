import { AppBar, Divider, Paper, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import Code from "../ugly/Code";

const Template = ({ title, problem, flow, struct, pseudo, code }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const [c, setC] = useState(code);

  return (
    <>
      <h1>{title}</h1>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          onChange={handleChange}
        >
          <Tab label="Problem" {...a11yProps(0)} />
          <Tab label="Flussdiagramm" {...a11yProps(1)} />
          <Tab label="Struktogramm" {...a11yProps(2)} />
          <Tab label="Pseudocode" {...a11yProps(3)} />
          <Tab label="Code" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <Paper
        hidden={value !== 0}
        style={{
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: 1,
        }}
      >
        <h3>Problem</h3>
        {problem}
      </Paper>
      <Paper
        hidden={value !== 1}
        style={{
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: 1,
        }}
      >
        <h3>Flussdiagramm</h3>
        <img
          src={
            flow
              ? flow
              : "https://static.thenounproject.com/png/1554490-200.png"
          }
        />
      </Paper>
      <Paper
        hidden={value !== 2}
        style={{
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: 1,
        }}
      >
        <h3>Struktogramm</h3>
        <img
          src={
            struct
              ? struct
              : "https://static.thenounproject.com/png/1554490-200.png"
          }
        />
      </Paper>
      <Paper
        hidden={value !== 3}
        style={{
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: 1,
        }}
      >
        <h3>Pseudocode</h3>
        <pre>{pseudo ? pseudo : "Pseudocode nicht verlangt"}</pre>
      </Paper>
      <Paper
        hidden={value !== 4}
        style={{
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: 1,
        }}
      >
        <h3>Code</h3>
        <Code code={c} callback={setC} />
      </Paper>
    </>
  );
};
export default Template;
