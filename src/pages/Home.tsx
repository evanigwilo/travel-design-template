// React
import { Fragment } from "react";
// Components
import NavBar from "../components/NavBar";
import HotelContainer from "../components/Hotel/HotelContainer";
import RoomContainer from "../components/Room/RoomContainer";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <HotelContainer />
      <RoomContainer />
    </Fragment>
  );
};

export default Home;
