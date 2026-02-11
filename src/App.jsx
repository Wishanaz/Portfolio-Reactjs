import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/github/Github";

// import MacWindow from "./components/windows/MacWindow"

const App = () => {
  return (
    <div>
      <main>
        <Nav />

        <div className="desktop">
          <Github />
        </div>

        <Dock />
      </main>
    </div>
  );
};

export default App;
