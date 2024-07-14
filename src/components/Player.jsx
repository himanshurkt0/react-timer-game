import { useRef } from "react";
import { useState } from "react";

export default function Player() {

  const playerName = useRef();
  const [enteredPlayerName,setEnteredPlayerName] = useState(null);

  function handleSubmit(){
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown user !'} </h2>
      <p>
        <input type="text"
        ref={playerName}
          />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
