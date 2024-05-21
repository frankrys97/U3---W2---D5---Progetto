import MyNavBar from "./MyNavBar";
import { useParams } from "react-router-dom";
import MyMainCityPage from "./MainCityPage";
import BackgroundVideo from "./BackgroundVideo";

const MyCityPage = () => {
  const params = useParams();

  return (
    <div>
      <BackgroundVideo />

      <MyNavBar />
      <MyMainCityPage cityName={params.cityName} />
    </div>
  );
};

export default MyCityPage;
