
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/pages/loginPage/Login'
import HomePage from './components/pages/HomePage'
import SideMenu from './components/organisms/sideMenu/SideMenu'

function App() {
  if (true) {
    <Redirect to='/login' />
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mainMenu">
          <SideMenu />
        </div>
        <div className="mainContent">
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
