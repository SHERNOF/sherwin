import classes from "./app.module.css";
import LeftSideBar from "./components/leftsidebar/LeftSideBar";
import Column2 from "./components/column2/Column2.jsx";

function App() {
  return (
    <div className={classes.app}>
      <div
        style={{
          boxSizing: "border-box",
          padding: "0",
          margin: "0",
          position: "relative",
        }}
      >
        {/* <div
          style={{
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            position: "fixed",
            opacity: "0",
            transition: "all .2s",
            zIndex: "99",
            visibility: "hidden",
            border: "1px solid white",
          }}
        > */}
        <LeftSideBar />
        <Column2 />
        <Column2 />
        <Column2 />

        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
