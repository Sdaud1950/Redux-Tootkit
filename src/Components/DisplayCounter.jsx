import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {

  const {counterval}= useSelector((store)=>store.counter)
  return (
    <div>
      <p className="lead mb-4">Counter value:{counterval}</p>
    </div>
  );
};

export default DisplayCounter;
