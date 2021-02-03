import React, {useState, useEffect} from "react";
import CursorSvg from '../../cursors/cursor-regular.svg';
import styled from "styled-components";

//please convert this to transform translate!

const Wrapper = styled.div`
  position: absolute;
  pointer-events: none;
  left: 0px;
  top: 0;
  z-index: 999999;
`

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  const updateMousePosition = e => {
    setMousePosition({x: e.clientX, y: e.clientY + window.scrollY});
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <Wrapper style={{left: `${mousePosition.x - 32}px`, top: `${mousePosition.y - 32}px`}}>
      <CursorSvg />
    </Wrapper>
  )
}

export default Cursor;