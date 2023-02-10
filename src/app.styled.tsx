// Styled components
import styled from "styled-components"

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .main-game {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
