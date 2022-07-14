import React, { useEffect, useState } from "react";
import "./style.css";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [myStyle, setMyStyle] = useState({
    color: "#bdbdbd",
    backgroundcolor: "#ede7f6",
  });

  function changePlus() {
    if (myStyle.color === "#bdbdbd") {
      setMyStyle({
        color: "#f44336",
        backgroundcolor: "#ede7f6",
      });
    }
    setCount(count + 1);
  }

  useEffect(() => {
    if (count === 0) {
      setMyStyle({
        color: "#bdbdbd",
        backgroundcolor: "#ede7f6",
      });
    }
  }, [count]);

  function changeReset() {
    setCount(0);
    setMyStyle({
      color: "#bdbdbd",
      backgroundcolor: "#ede7f6",
    });
  }

  return (
    <React.Fragment>
      <div className="main_content">
        <div className="content">
          <button
            style={myStyle}
            className="minus_button"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -
          </button>
          <div className="div">
            <div className="display">{count}</div>
          </div>
          <button className="plus_button" onClick={changePlus}>
            +
          </button>
        </div>
        <button className="reset" onClick={changeReset}>
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

export default Demo;
