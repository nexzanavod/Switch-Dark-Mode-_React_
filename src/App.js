import React, {useState} from "react";
import './App.css';
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import {Paper,Switch} from "@material-ui/core";



function App() {
  const [darkMode,setDarkMode] = useState(false);
  const theme = createMuiTheme({
      palette:{
       type:darkMode?"dark":"light",
      }
  })
  return (
    <ThemeProvider theme={theme}>
      <Paper style = {{height:"100vh"}}>
        <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} className="react-switch"/>
     <div className="Text">Hello</div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
