import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Context from "./components/Context/Context";
import Network from "./components/Network/Network";

function App() {
  return (
    <Context>
      <div>
        <Switch>
          <Route exact path="/">
            <div className=" bg-white h-screen">
              <Login />
            </div>
          </Route>
          <Route path="/feed">
            <Main />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/people">
            <Network />
          </Route>
        </Switch>
      </div>
    </Context>
  );
}

export default App;
