import React, { useState } from "react";
import styled from "styled-components";

const Toggle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 150px;
  background: #222;
  transition: all 0.25s;
  box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
    inset 0 8px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default function Switch() {
  const [engr, setengr] = useState(true);

  return (
    <Toggle onClick={() => setengr(!engr)}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${engr ? "0" : "50%"}`,
          width: "50%",
          height: "100%",
          background: "linear-gradient(to bottom, #444, #222)",
          borderRadius: "50%",
          transform: "scale(0.9)",
          boxShadow:
            "0 8px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(255, 255, 255, 0.2)",

          transition: "all .25s",
        }}
      ></div>
    </Toggle>
  );
}
