import { listData } from '../../../lib/dummyData';

import './listPage.scss'

import Cards from '../../../components/cards/cards';

import Map from '../../../components/map/map';


import Filter from '../../../components/filter/filter';

const ListPage=()=>{
  const data=listData;

  return(
    <div className="listPage">
        <div className="list-container">
          <div className="wrapper">
            <Filter/>
            {data.map(item=>(
              <Cards  key={item.id} item={item}/>
            ))}
          </div>
        </div>

        <div className="map-container">
          <Map items={data}/>

        </div>
    </div>
  )
}

export default  ListPage;