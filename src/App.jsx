import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Card from "./Components/Card";
import Control from "./Components/Control";
import { useSelector } from "react-redux";
import PrivacyMsg from "./Components/PrivacyMsg";

function App() {


  const privacy= useSelector((store)=>store.privacy)

  return (
    <>
      <div className="px-4 py-5 my-5 text-center" bis_skin_checked="1">
        <Card>
          <Header />
          <div className="col-lg-6 mx-auto" bis_skin_checked="1">
          { privacy ? <PrivacyMsg/> : <DisplayCounter />}
            <Control />
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
