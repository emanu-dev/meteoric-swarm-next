import styled from "styled-components";

const Project = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  
  > a {
    color: inherit;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`
Project.Title = styled.h4`
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: 6.5rem;
  left: 0;
  line-height: 110%;
  margin: 1rem 0;
  text-align: left;
  text-shadow: 1px 1px 2px black;
  position: absolute;
  top: 10rem;
  width: 50rem;
`

Project.Desc = styled.p`
  font-family: "DejaVu Sans", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  padding: 0 2rem;
  text-align: center;
`

export default Project;