import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWindow from "./components/windows/MacWindow"

const App = () => {
  return (
    <div>
      <main>
        <Nav />

        <div className="desktop">
          <MacWindow >
            <h1>HEYY</h1>
          </MacWindow>
        </div>

        <Dock />
      </main>
    </div>
  )
}

export default App