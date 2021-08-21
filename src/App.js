
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login'
import HomePage from './components/pages/HomePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' component={Login} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
