import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { CounterAction, privacyAction } from "../Store";

const Control = () => {
  const dispatch = useDispatch();
  let refElement = useRef();


  const HandelPricay = () => {
    dispatch(privacyAction.Toogle())
  };

  const handelIncrement = () => {
    dispatch(CounterAction.increment());
  };
  const handelDerement = () => {
    dispatch(CounterAction.decrement());
  };
  const handelNull = () => {
    dispatch(CounterAction.nullAction())
  };

  
  const handelAdd = () => {
    dispatch(CounterAction.addValue ({
      num:refElement.current.value,
    }))
  };

  const handelSub = () => {
    dispatch(CounterAction.subtractValue({
      num:refElement.current.value
    }))
  }

  return (
    <>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        bis_skin_checked="1"
      >
        <button type="button" className="btn btn-primary" onClick={handelIncrement}>
          Increment
        </button>
        <button type="button" className="btn btn-success" onClick={handelDerement}>
          Decrement
        </button>
        <button type="button" className="btn btn-dark" onClick={handelNull}>
          Reset
        </button>{" "}
        <br></br>
      </div>

      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-row"
        bis_skin_checked="1"
      >
        <input
          type="text"
          placeholder="EnterNumber"
          className="input-wraap"
          ref={refElement}
        />

        <button type="button" className="btn btn-info" onClick={handelAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handelSub}>
          Sub
        </button>
        <button type="button" className="btn btn-warning" onClick={HandelPricay}>
          Privacy
        </button>
      </div>
    </>
  );
};

export default Control;
