import logo from './logo.svg';
import './App.css';
import { Divider, Drawer, Link, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import Router from './components/ugly/Router';
import { useState } from 'react';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#222",
    color: "white",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [page, setPage] = useState("collatz");


  return (
    <>
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem >
          <h2>M411 by <Link href="mailto:ruben.kober@pm.me">Ruby</Link></h2>
        </ListItem>
        <ListItem button>
          <ListItemText>Collatz Problem</ListItemText>
        </ListItem>
      </List>
    </Drawer>
    <div style={{marginLeft: 240, padding: 10}}>
      <Router page={page}/>
    </div>
    </>
  );
}

export default App;
