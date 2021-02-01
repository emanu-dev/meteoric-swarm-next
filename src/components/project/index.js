import styled from "styled-components";

const Project = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.textContrast};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  
  > a {
    color: inherit;
    text-decoration: none;
  }
`
Project.Title = styled.h4`
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: 3rem;
  margin: 1rem 0;
  text-align: center;
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