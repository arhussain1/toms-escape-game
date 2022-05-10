import PowerSwitchOn from "../../images/items/SwitchOn.png"
import PowerSwitchOff from "../../images/items/switchOff.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PowerSwitch = () => {
  const { hasBroom, setHasBroom } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  
  const turnPowerOn = () => {
    if (hasBroom) {
      setHasTurnedOnPower(true)
      setLogs([...logs, { type: "success", text: "You reach with the broom and.. ZAP! Power is back on babeeh!"}])
      
    } else {
      setLogs([...logs, { type: "warning", text: "Its out of reach! Maybe you should look for something long and sturdy"}])

    }
  }

  return hasTurnedOnPower ?
    (<>
    <img className='item' id="power-switch" src={PowerSwitchOn} />
    </>) :
    (<>
    <img className='item' id="power-switch" data-testid="power-switch" src={PowerSwitchOff} onClick={turnPowerOn} />
    </>)
}
