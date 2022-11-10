import React from "react";
import GetDataExample from "./components/GetDataExample";

function App() {
  return (
    <div>
      <GetDataExample url={process.env.REACT_APP_DATA_URL}/>
      <GetDataExample url={process.env.REACT_APP_ERROR_URL}/>
      <GetDataExample url={process.env.REACT_APP_LOADING_URL}/>
    </div>
  );
}

export default App;
