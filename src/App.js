import classes from "./app.module.css";
import LeftSideBar from "./components/leftsidebar/LeftSideBar";
import Column2 from "./components/column2/Column2.jsx";

function App() {
  return (
    <div className={classes.app}>
      <LeftSideBar />
      <Column2 />
    </div>
  );
}

export default App;
