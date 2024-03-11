import classes from "./app.module.css";
import LeftSideBar from "./components/leftsidebar/LeftSideBar";
import Column2 from "./components/column2/Column2.jsx";
import shernof from "./data.js";
import { useEffect } from "react";
function App() {
  // useEffect(() => {
  //   const fetchInfo = () => {
  //     const { info } = shernof;
  //     console.log(info);
  //   };
  //   fetchInfo();
  // }, []);

  const { info } = shernof;

  return (
    <div className={classes.app}>
      <LeftSideBar shernof={info} />
      <Column2 />
    </div>
  );
}

export default App;
