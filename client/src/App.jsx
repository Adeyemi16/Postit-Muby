import { Toaster } from "react-hot-toast";
import Routespath from "./routes/Routespath";
import "./App.css";
import { StateContext } from "./config/store";

function App() {
  return (
    <>
      <StateContext>
        <Toaster position="bottom-right" />
        <Routespath />
      </StateContext>
    </>
  );
}

export default App;
