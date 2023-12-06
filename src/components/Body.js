import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./shimmer";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchtext, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.00848260376121&lng=73.10884818110601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).catch((err) => {
      console.log("error while fetching data", err);
    });
    const json = await data.json();
    //console.log(json)
    setListOfRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    )
  };

  return !listOfRestaurent.length ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              let filteredRes = listOfRestaurent.filter(
                (ele) => ele.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestaurent(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <button
          className="top-res"
          onClick={() =>
            setListOfRestaurent(
              listOfRestaurent.filter((ele) => ele.info.avgRating > 4)
            )
          }
        >
          Top Restaurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((restaurent) => {
          return (
            <RestaurentCard
              key={restaurent.info.id}
              resData={restaurent.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
