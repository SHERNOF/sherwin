import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import MyImage from "./1.jpeg";
import { HiCheck } from "react-icons/hi";

const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
    0% {
      transform: rotate(0deg);
    }
  `;
const Circle = styled.div`
  font-family: consolas;
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Text = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 10s linear infinite;
  color: white;
  /* border: 1px solid red; */
  border-radius: 50%;
  z-index: 100;
`;
export default function Rtext() {
  const pRef = useRef();
  const c = () => {
    pRef.current.innerHTML = pRef.current.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 7.7}deg); 
          position:absolute; z-index:1000;
          left:50%; border:'1px solid green';
          transform-origin: 0 112px; font-size:1em">${char}</span>`
      )
      .join("");
  };
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "10vh",
      }}
      onLoad={c}
    >
      <Circle>
        <Text>
          <img
            src={MyImage}
            alt="MyPhoto"
            style={{
              width: "100%",
              height: "100%",
              opacity: "0",
            }}
          />
          <HiCheck
            style={{ fontSize: "2em", position: "absolute", zIndex: "100" }}
          />
        </Text>
        <Div>
          <p ref={pRef}>* SHERWIN NOFUENTE * ASPIRING REACT DEVELOPER</p>
        </Div>
      </Circle>
    </div>
  );
}
