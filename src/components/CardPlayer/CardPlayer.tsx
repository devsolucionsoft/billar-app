import { useState } from "react"
// Styled components
import { Main } from "./CardPlayer.styled"
import { MdDeleteForever } from "react-icons/Md"
import { GrFormSubtract } from "react-icons/Gr"

const CardPlayer = () => {
  const [points, setPoint] = useState<number>(0)

  const addPoints = (value: number) => {
    setPoint(points + value)
  }

  const subtractPoints = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    points > 0 && setPoint(points - 1)
  }

  return (
    <Main onClick={() => addPoints(1)}>
      <h2 className="score">{points}</h2>

      <div className="row">
        <h1>player</h1>

        <button className="subtract-button" onClick={subtractPoints}>
          <GrFormSubtract />
        </button>
      </div>
      <div className="row">
        <div className="addition-buttons">
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(2)
            }}
          >
            +2
          </button>
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(3)
            }}
          >
            +3
          </button>
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(4)
            }}
          >
            +4
          </button>
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(5)
            }}
          >
            +5
          </button>
        </div>

        <button
          className="delete-button"
          onClick={(event) => {
            event.stopPropagation()
            setPoint(0)
          }}
        >
          <MdDeleteForever />
        </button>
      </div>
    </Main>
  )
}

export default CardPlayer
