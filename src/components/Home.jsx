import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";
import MyMain from "./MainHome";
import BackgroundVideo from "./BackgroundVideo";

const MyHome = () => {
  return (
    <div className="Home">
      <BackgroundVideo />
      <MyNavBar />
      <MyMain />
      <MyFooter />
    </div>
  );
};

export default MyHome;
