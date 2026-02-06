import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div>
      <main>
        <Dock/>
        <Nav/>
      </main>
    </div>
  )
}

export default App