import '../../App.css';
import { AppContext } from "../../AppContext"
import { useContext } from "react"



export const GameComplete = ({ }) => {
  const { userName, setUserName } = useContext(AppContext)
  const { finalTime, setFinalTime } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext);

  const sendScore = async (name, time) => {
    
    const url = 'http://localhost:3030/scores'

    const data = {
      name: name,
      minutes: time.minutes,
      seconds: time.seconds
    }

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
  }


  const submitName = (e) => {
    console.log(userName)
    sendScore(userName, finalTime)
    e.preventDefault()
    setPlayerLocation(5)
  }

  

  return (
    <div className="game-complete">
      <div className="game-complete-message">
        <h1>You freed Tom in {finalTime.minutes}:{finalTime.seconds < 10 && 0}{finalTime.seconds}!</h1>
        <h2>Enter your name and see if </h2>
        <h2>you made it onto the leaderboard</h2>
      
        <form id="submit-name">
          <input className="name-box" type="text" value={userName} placeholder="Enter Your Name" onChange={(e) => setUserName(e.target.value)} />
          <input className="button-18" type="submit" value="Submit" onClick={submitName} />
        </form>
      </div>
    </div>
  );
}