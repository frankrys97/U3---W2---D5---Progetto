import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";
import MyMain from "./MainHome";
import BackgroundVideo from "./BackgroundVideo";

const MyHome = () => {
  return (
    <div>
      <BackgroundVideo />

      <div className="Home">
        <MyNavBar />
        <MyMain />
        <MyFooter />
      </div>
    </div>
  );
};

export default MyHome;
