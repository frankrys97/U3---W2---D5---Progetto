import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyNavBar from "./MyNavBar";
import BackgroundVideo from "./BackgroundVideo";

const NotFound = (props) => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <BackgroundVideo />
      <MyNavBar />
      <h1 className="display-3 text-warning">404 — Page not found</h1>
      <p className="lead">The information you requested could not be found.</p>

      <Button
        variant="warning"
        onClick={() => {
          navigate("/");
        }}
      >
        Torna alla home
      </Button>
    </div>
  );
};

export default NotFound;
