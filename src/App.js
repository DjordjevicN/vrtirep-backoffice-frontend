import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/pages/loginPage/Login";
import HomePage from "./components/pages/HomePage";
import UserPage from "./components/pages/userPage/UserPage";
import SideMenu from "./components/organisms/sideMenu/SideMenu";
import BlogPage from "./components/pages/BlogPage";
import AnimalPage from "./components/pages/AnimalPage";
import BannerPage from "./components/pages/BannerPage";

function App() {
  if (true) {
    <Redirect to="/login" />;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mainMenu">
          <SideMenu />
        </div>
        <div className="mainContent">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/userPage" component={UserPage} />
            <Route path="/blogPage" component={BlogPage} />
            <Route path="/animalPage" component={AnimalPage} />
            <Route path="/bannerPage" component={BannerPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
