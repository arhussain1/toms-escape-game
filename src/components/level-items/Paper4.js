import { AppContext } from "../../AppContext"
import { PouchPaper4 } from "../pouch-items/PouchPaper4"
import crumpled from "../../images/items/crumpled.png"
import { useContext } from "react"


export const Paper4 = () => {

  const { hasPaper4, setHasPaper4 } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabPaper4 = () => {
    setHasPaper4(true)
    setPouch([...pouch, <PouchPaper4 key="paper-4"/>])
    setLogs([...logs, { type:"inform", text: "Maybe you should uncrumple the paper mouse boy"}])

  }

  return (
    <div>
      <img src={crumpled} className="item" id="paper-4" onClick={grabPaper4}/>
    </div>
  )
}
