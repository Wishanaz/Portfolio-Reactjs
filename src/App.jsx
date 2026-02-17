import "./app.scss";

import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/github/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";


const App = () => {
  return (
    <div>
      <main>
        <Nav />

        <div className="desktop">

          <Github />  
          <Note/>
          <Resume/>
          <Spotify/>
        </div>

        <Dock />
      </main>
    </div>
  );
};

export default App;
