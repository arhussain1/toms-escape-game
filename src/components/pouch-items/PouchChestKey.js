import { useContext } from "react"
import { AppContext } from "../../AppContext"
import chestKey from "../../images/items/chestKey.png"


export const PouchChestKey = () => {

  const { logs, setLogs } = useContext(AppContext)


  const clickChestKey = () => {
    setLogs([...logs, { type:"pouch-item", text: "Doesn't look like the key to Tom's cage"}])
    
  }

  return (
      <img className='item' id="pouch-chest-key" src={chestKey} onClick={clickChestKey} style={{ height: '40px'}}/>
  )
}