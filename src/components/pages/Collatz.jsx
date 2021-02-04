import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

const Collatz = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }

    return (
        <>
            <h1>Collatz Problem</h1>
            <AppBar position="static" color="default">
            <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            handleChange={handleChange}
            >
                <Tab label="Problem" {...a11yProps(0)}/> 
                <Tab label="Flussdiagramm" {...a11yProps(1)}/>
                <Tab label="Struktogramm" {...a11yProps(2)}/>
                <Tab label="Pseudocode" {...a11yProps(3)}/>
                <Tab label="Code" {...a11yProps(4)}/>
            </Tabs>
            </AppBar>
        </>
    )
}
export default Collatz;