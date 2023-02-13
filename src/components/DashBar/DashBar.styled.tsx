// Styled components
import styled from "styled-components"
// Interfaces
import { ButtonActionI } from "./DashBar"

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.ligth};
  border: 3px solid ${(props) => props.theme.colors.dark};
  display: flex;
  height: 95%;

  .contain {
    display: flex;
    flex-direction: column;
    width: 35vw;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: ${(props) => props.theme.colors.dark};
      color: ${(props) => props.theme.colors.ligth};

      h1 {
        text-align: center;
        font-size: 25px;
      }
    }

    .content {
      height: 100%;
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: space-between;

      p {
        text-align: center;
      }

      .d-flex {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        .total-time {
          h3 {
            font-size: 20px;
            font-weight: 500;
            line-height: 100%;
          }
          h4 {
            font-size: 45px;
            line-height: 100%;
            span {
              font-size: 20px;
            }
          }
        }

        .account {
          text-align: right;
          h3 {
            font-size: 20px;
            font-weight: 500;
            line-height: 100%;
          }
          h4 {
            line-height: 100%;
            font-size: 45px;
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: space-between;
      }

      .video-section {
        position: relative;
        .video {
          width: 100%;
          height: 18vw;
          border: 3px solid ${(props) => props.theme.colors.dark};
        }

        .actions {
          position: absolute;
          bottom: 10px;
          right: 0;
          button {
            display: flex;
            align-items: center;
            font-size: 20px;
            padding: 5px 10px;
            margin-left: 8px;
            cursor: pointer;
            border: 3px solid ${(props) => props.theme.colors.dark};

            span {
              margin-right: 5px;
            }
          }
        }
      }

      .actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }
`

export const Button = styled.button<ButtonActionI>`
  cursor: pointer;
  width: 48%;
  font-size: 22px;
  padding: 8px 10px;
  font-weight: 500;
  margin-bottom: 10px;
  border: 3px solid ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.ligth};
  background-color: ${(props) => props.theme.colors[props.color]};
`
