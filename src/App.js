import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbars from "./Components/Navbars";

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
