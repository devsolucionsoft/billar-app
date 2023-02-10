// App components
import { DashBar, CardPlayer } from "./components"
// Styled components
import { Main } from "./app.styled"

function App() {
  return (
    <Main>
      <div className="main-game">
        <CardPlayer />
        <CardPlayer />
      </div>
      <DashBar />
      <div className="main-game">
        <CardPlayer />
        <CardPlayer />
      </div>
    </Main>
  )
}

export default App
