import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";
import MyMain from "./MainHome";
import BackgroundVideo from "./BackgroundVideo";

const MyHome = () => {
  return (
    <div className="Home">
      <BackgroundVideo />
      <MyNavBar />
      <MyMain  className="mb-5"/>
      <MyFooter/>
    </div>
  );
};

export default MyHome;
