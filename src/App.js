import {Home} from "./pages/Home/Home";
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import Single from "./pages/Single/Single"
import New from "./pages/New/New"
import "./App.scss";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
    <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users">
  <Route index element={<List />}/>
    <Route path=":userid" element={<Single />} />
    <Route path="new" element={<New />} />
    </Route>
    </Route>
</Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
