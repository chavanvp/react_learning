import MockData from "../utils/MockData"
import RestaurentCard from "./RestaurentCard"; 
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {MockData.map((restaurent) => {
            return <RestaurentCard key = {restaurent.info.id}resData={restaurent.info} />;
          })}
        </div>
      </div>
    );
  };

  export default Body