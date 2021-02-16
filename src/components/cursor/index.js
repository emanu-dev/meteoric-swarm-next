import React, {useState, useEffect} from "react";
import CursorSvg from '../../cursors/cursor-regular.svg';
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  pointer-events: none;
  left: 0;
  opacity: 0;
  top: 0;
  transition: opacity .6s ease;
  z-index: 999999;
  
  @media screen and (max-width: 600px) {
    display: none;
  }
`
const CursorPointer = styled.div`
  border: 2px solid ${props => props.theme.colors.textContrast};
  border-radius: 50%;
  background-color: rgba(0,0,0,.5);
  height: 40px;
  width: 40px;
  transform: rotateZ(45deg);
`


const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({x: -20, y: -20});

  const updateMousePosition = e => {
    setMousePosition({x: e.clientX, y: e.clientY + window.scrollY});
  }

  const handleScroll = () => {
    setMousePosition({x: -20, y: -20});
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper style={{opacity: Math.sign(mousePosition.x+mousePosition.y), transform: `translate(${mousePosition.x - 32}px, ${mousePosition.y - 32}px)`}}>
      <CursorPointer />
    </Wrapper>
  )
}

export default Cursor;