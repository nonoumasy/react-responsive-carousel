import "./styles.css";
import Carousel from "./components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App() {
  return (
    <div className="main-container">
      <Carousel />
    </div>
  );
}
