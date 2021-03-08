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
  border-left: 1px solid ${props => props.theme.colors.textContrast};
  border-right: 1px solid ${props => props.theme.colors.textContrast};
  background-color: rgba(0,0,0,.5);
  height: 40px;
  width: 40px;
  transform: rotateZ(45deg);
  transition: all 150ms ease-out;
  position: relative;
  top: 10px;
  left: 10px;

  &:after {
    background-color: rgba(255,255,255,.25);
    content: ' ';
    border-radius: 50%;
    height: 5px;
    left: calc(50% - 3px);
    position: absolute;
    top: calc(50% - 3px);
    transition: all 150ms ease-out;
    width: 5px; 
  }

  &.--active {
    border-radius: 0;
    height: 30px;
    width: 30px;    
    top: 8px;
    left: 8px;  

    &:after {
      border-radius: 0%;
      height: 15px;
      left: calc(50% - 8px);
      top: calc(50% - 8px);
      width: 15px; 
    }      
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

  const initUpdate = () => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", handleScroll);    
  }

  const endUpdate = () => {
    window.removeEventListener("mousemove", updateMousePosition);
    window.removeEventListener("scroll", handleScroll);    
  }

  useEffect(() => {
    initUpdate();
    return () => {
      endUpdate();
    };
  }, []);

  return (
    <Wrapper style={{opacity: Math.sign(mousePosition.x+mousePosition.y), transform: `translate(${mousePosition.x - 32}px, ${mousePosition.y - 32}px)`}}>
      <CursorPointer ref={ref} />
    </Wrapper>
  )
});

export default Cursor;