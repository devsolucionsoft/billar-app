// Styled components
import { Main, Button } from "./DashBar.styled"
import { RiRepeatFill, RiSearchLine } from "react-icons/Ri"

export interface ButtonActionI {
  text: string
  color: "success" | "danger" | "default"
}

const ButtonAction = (props: ButtonActionI) => {
  return <Button {...props}>{props.text}</Button>
}

const DashBar = () => {
  return (
    <Main>
      <div className="contain">
        <div className="top">
          <h1>Mesa 1</h1>
          <p>12:03 PM</p>
        </div>

        <div className="content">
          <div>
            <p>
              <b>Hora de inicio</b>: 11:30 AM
            </p>
            <div className="d-flex">
              <div className="total-time">
                <h3>Tiempo total</h3>
                <h4>
                  15:23<span>min</span>
                </h4>
              </div>

              <div className="account">
                <h3>Cuenta</h3>
                <h4>$30.000</h4>
              </div>
            </div>

            <div className="buttons">
              <ButtonAction text="Iniciar" color="success" />
              <ButtonAction text="Finalizar" color="danger" />
            </div>
          </div>

          <div className="video-section">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/O4XpPXNDvVI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="actions">
              <button>
                <RiSearchLine />
              </button>
              <button>
                <span>Repetición</span>
                <RiRepeatFill />
              </button>
            </div>
          </div>

          <div className="actions">
            <ButtonAction text="Otra accion" color="default" />
            <ButtonAction text="Otra accion" color="default" />
            <ButtonAction text="Otra accion" color="default" />
            <ButtonAction text="Otra accion" color="default" />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default DashBar
