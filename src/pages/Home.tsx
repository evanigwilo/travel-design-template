// React
import { Fragment } from "react";
// Components
import NavBar from "../components/NavBar";
import HotelContainer from "../components/Hotel/HotelContainer";
import RoomContainer from "../components/Room/RoomContainer";
import ReviewContainer from "../components/Review/ReviewContainer";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <HotelContainer />
      <RoomContainer />
      <ReviewContainer />
    </Fragment>
  );
};

export default Home;
