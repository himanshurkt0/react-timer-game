import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Easy" targetTime={1} />
        <Timer title="Medium" targetTime={5} />
        <Timer title="Hard" targetTime={10} />
        <Timer title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
