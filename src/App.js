import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Counter from "./components/Counter";
import counterImage from "./images/counter.jpg"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${counterImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: false,
  }
}));


const App = () => {
  const classes = useStyles();
 
    return (
      <div className={classes.container}>
        
          <Container component="main" maxWidth="sm">
             <Counter />
         </Container>
      </div>
    );
  
}

export default App;
