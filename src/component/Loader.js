import { useState } from "react";

const Loader = () => {
  const [show] = useState(false);
  // setTimeout(() => {
  //   setShow(false);
  // }, 3000);

  return (
    <div className="loader" style={{ display: !show && "none" }}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Loader;
