import { Link } from "react-router-dom";
import "./cards.scss";


const Cards = () => {
  return (
    <div className="cards">
      <Link to={`/${item.id}`} className="image-conatiner">
        <img src={item.img} alt="" />
      </Link>

      <div className="text-container">
        <h2 className="title">
          <Link  to={`/${item.id}`} >
          {item.title}
          </Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt=""/>
            <span>{item.address}</span>
        </p>
        <p className="price">
          ${item.price}
        </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt=""/>
              <span>{item.bedroom}
                bedroom
              </span>
            </div>
            
            <div className="feature">
              <img src="/bed.png" alt=""/>
              <span>{item.bedroom}
                bedroom
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
