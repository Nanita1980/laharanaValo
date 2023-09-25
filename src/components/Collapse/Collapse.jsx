import React, { useState } from "react";
import arrowUp from "./arrowUp.png";

const Collapse = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  const [checkClose, setcheckClose] = useState(false);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setcheckClose(true);
      setTimeout(() => {
        setOpen(false);
        setcheckClose(false);
      }, 200);
    }
  };

  return (
    <div className="containerCollapse">
      <button className="collapseBtn" onClick={handleClick}>
        <label className="collapseTitle">{title}</label>
        <div className="containerCollapseIcon">
          <img
            src={arrowUp}
            alt="Flèche"
            className={open ? "arrowRotateDown" : "arrowRotateUp"}
          />
        </div>
      </button>
      {open && (
        <div
          className={`collapseContent ${checkClose ? "closeCollapseAnim" : ""}`}
        >
          {Array.isArray(desc) ? (
            desc.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p>{desc}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;