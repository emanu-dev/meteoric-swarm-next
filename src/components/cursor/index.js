import React, {useState, useEffect} from "react";
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
  transition: border-radius 150ms ease-in;
  position: relative;
  top: 10px;
  left: 10px;

  &.--active {
    border-radius: 0;
  }
`


const Cursor = React.forwardRef((props, ref) => {
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
      <CursorPointer ref={ref} />
    </Wrapper>
  )
});

export default Cursor;