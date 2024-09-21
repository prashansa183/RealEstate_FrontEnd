
import "./list.scss"
import Card from "../cards/cards"
import { listData } from "../../lib/dummyData"

function List(){
  return(
    <div className="list">
      {listData.map(item=>(
        <Card key ={item.id} item={item}/>
      ))}
    </div>
  )
}
export default List