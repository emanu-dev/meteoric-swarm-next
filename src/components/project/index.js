import styled from "styled-components";

const Project = styled.div`
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  justify-content: flex-start;
  height: 100%;
  padding: 0 2rem;
  position: relative;
  max-width: 80vw;

  @media screen and (max-width: 600px) {
    justify-content: center;
    max-width: none;
  }
`
Project.Content = styled.div`
  height: 50rem;
  width: 60rem;
  
  @media screen and (max-width: 600px) {
    margin-top: 28rem;
    width: 80vw;
  }
`

Project.Title = styled.h4`
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: 8rem;
  line-height: 110%;
  margin: 0 0 1rem 0;
  text-align: left;
  text-shadow: 2px 2px 2px #000000;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
  
`

Project.Desc = styled.p`
  font-family: "DejaVu Sans", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  padding: 0 .5rem;
  text-align: left;
  width: 20rem;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  } 
`

Project.Image = styled.div`
  background: url("${props => props.src}") no-repeat right/cover;
  height: 60rem;
  left: 35rem;
  max-width: 110rem;
  opacity: .6;
  position: absolute;
  width: 100%;
  z-index: -1;

  @media screen and (max-width: 600px) {
    width: 80vw;
    left: 41%;
    height: 30rem;
    background-position: center;
  }
`

Project.Link = styled.a`
  padding: 2rem 3rem;
  font-family: "DejaVu Sans", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
`

export default Project;