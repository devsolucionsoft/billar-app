// Styled components
import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.ligth};
  border: 3px solid ${(props) => props.theme.colors.dark};
  height: 42%;
  width: 100%;
  padding: 10px;
  position: relative;
  margin-right: 2%;
  cursor: pointer;

  .score {
    position: absolute;
    font-size: 200px;
    text-align: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    line-height: 300px;
    user-select: none;
  }

  .row {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .subtract-button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
    border: 3px solid ${(props) => props.theme.colors.dark};
  }

  .delete-button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors.dark};
  }

  .addition-buttons {
    display: flex;
    flex-direction: column;

    .addition-item {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.secondary};
      border: 3px solid ${(props) => props.theme.colors.dark};
      cursor: pointer;
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.ligth};
    }
  }
`
