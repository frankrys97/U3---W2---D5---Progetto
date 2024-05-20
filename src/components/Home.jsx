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
      <MyFooter className="position-fixed bottom-0" />
    </div>
  );
};

export default MyHome;
