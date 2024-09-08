import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";

import "./layout.scss";

const App = () => {
  return (
    <div className="conatiner">
      <div className="layout">
        <div className="navbar ">
          <Navbar />
        </div>

        <div className="content">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default App;
