import { BrowserRouter,Routes,Route, Switch } from "react-router-dom";
import Register from "./compontents/Register";
import Login from "./compontents/Login";
import Home from "./compontents/Home";


function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} />
              {/* <Route path="/quiz" element = {<Quiz/>} /> */}
            </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;