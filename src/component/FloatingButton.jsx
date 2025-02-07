import { useNavigate } from "react-router-dom";
import "./FloatingButton.css";

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <div className="floating-button-container">
      <button
        className="floating-button"
        onClick={() => navigate("/jyotirlinga-form")}
      >
        Enquiry
      </button>
    </div>
  );
};

export default FloatingButton;
