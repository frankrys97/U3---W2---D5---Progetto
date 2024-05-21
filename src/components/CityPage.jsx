import MyNavBar from "./MyNavBar";
import { useParams } from "react-router-dom";
import MyMainCityPage from "./MainCityPage";
import BackgroundVideo from "./BackgroundVideo";

const MyCityPage = () => {
  const params = useParams();

  return (
    <div>
      <BackgroundVideo />

      <div className="Home ">
        <MyNavBar />
        <MyMainCityPage cityName={params.cityName} />
      </div>
    </div>
  );
};

export default MyCityPage;
