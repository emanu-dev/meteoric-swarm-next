import styled from "styled-components";

const Project = styled.div`
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  justify-content: flex-start;
  height: 100%;
  max-width: 140rem;
  padding: 0 5rem;
  position: relative;
  width: 80%;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 1rem 0;
  }
`

Project.Content = styled.div`
  position: relative;
  height: 50rem;
  max-width: 60rem;
  z-index: 9;

  @media screen and (max-width: 1000px) {
    top: -10%;
  }  
`

Project.Title = styled.h4`
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: 8rem;
  line-height: 110%;
  margin: 0 0 1rem 0;
  text-align: left;
  text-shadow: 2px 2px 2px #000000;
`

Project.Desc = styled.p`
  font-family: "DejaVu Sans", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  padding: 0 .5rem;
  text-align: left;
  width: 300px;
  
  @media screen and (max-width: 1000px) {
    width: auto;
  }
  
`

Project.Image = styled.div`
  background: url("${props => props.src}") no-repeat center/cover;
  height: 100%;
  right: 0;
  max-width: 120rem;
  opacity: .6;
  position: absolute;
  width: calc(100% - 40rem);

  @media screen and (max-width: 1000px) {
    position: static;
    height: 55%;
    width: 100%;
  }
`

Project.Link = styled.a`
  background: rgba(0, 0, 0, .25);
  border: 1px solid rgba(255, 255, 255, .3);
  box-shadow: 0 0 0 #ffffff;
  color: ${props => props.theme.colors.textContrast};
  cursor: none;
  font-family: "DejaVu Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding: 10px 20px;
  position: relative;
  top: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 300ms ease;
  
  &:hover {
    box-shadow: 2px 2px 0 #ffffff;
  }
`

export default Project;