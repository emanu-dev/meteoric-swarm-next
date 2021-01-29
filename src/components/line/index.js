import styled from 'styled-components';

const Line = styled.div`
  position: absolute;
  background-color: #fff;
  height: 0px;
  left: 50vw;
  opacity: .25;
  transition: transform 300ms ease;
  top: 60vh;
  width: 2px;
  z-index: 999;

  &.--center {
    opacity: 1;
    left: 50vw;
  }

  &.--left {
    transform: translate(-50vw) translate(60px);
  }

  &.--right {
    transform: translate(50vw) translate(-60px);
  }
`

export default Line;