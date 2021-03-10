import styled from "styled-components";

const Project = styled.div`
  position: relative;
  height: 50rem;
  max-width: 60rem;
  z-index: 9;

  @media screen and (max-width: 1000px) {
    height: auto;
    padding-left: 3rem;
    top: -10%;
  }  
`

Project.Title = styled.h4`
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: clamp(42px, 8rem, 80px);
  line-height: 100%;
  margin: 0 0 1rem 0;
  text-align: left;
  text-shadow: 2px 2px 0px ${props => props.theme.colors.primary};
`

Project.Desc = styled.p`
  font-family: 'DejaVuSans', sans-serif;
  font-size: clamp(14px, 2rem, 20px);
  font-weight: 200;
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
  box-shadow: 0 0 0 ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textContrast};
  cursor: none;
  font-family: 'DejaVuSans', sans-serif;
  font-size: 12px;
  font-weight: 200;
  padding: 10px 20px;
  position: relative;
  top: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 300ms ease;
  
  &:hover {
    box-shadow: 2px 2px 0 ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`

export default Project;