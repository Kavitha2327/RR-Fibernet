import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <Home />
    </BrowserRouter>
  );
}

export default App;