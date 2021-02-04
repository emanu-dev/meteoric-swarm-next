import styled from 'styled-components';

const Social = styled.div`
  display: flex;
  padding: 15rem 4rem 2rem 52%;
  
  > svg {
    height: auto;
    width: 100%;
  }
  
  @media screen and (max-width: 600px) {
    bottom: 4rem;
    position: absolute;
    padding: 4rem 2rem;
    width: 80%;
  }
`

export default Social;