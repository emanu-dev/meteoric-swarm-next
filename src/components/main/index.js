import styled from 'styled-components';

const Main = styled.main`
  background: linear-gradient(180deg, #000000 0%, ${props => props.theme.colors.bgLight} 100%);
  height: 2160px;
  margin: 0;
  min-height: 100vh;
  overflow-y: hidden;
  position: relative;
`

export default Main;