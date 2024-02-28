import Column1 from "./components/column1/Column1";
import Column2 from "./components/column2/Column2";
import Column3 from "./components/column3/Column3";
import Container from "./components/container/Container";
import classes from './app.module.css'

function App() {
  return (
    <div className={classes.app}>
      <Container>
        <Column1></Column1>
        <Column2></Column2>
        <Column3></Column3>
      </Container>
    </div>
  );
}

export default App;
