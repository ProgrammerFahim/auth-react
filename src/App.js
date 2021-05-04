import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PhoneLogin from './components/PhoneLogin';
import EmailLogin from './components/EmailLogin';

function App() {
  return (
    <div className="App">
      <h1 className="title-banner">Company Title</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Link className="normal-btn" to="/login">Log In</Link></Route>
        </Switch>
        <Switch>
          <Route path="/login"><Login /></Route>
        </Switch>
        <Switch>
          <Route path="/phone-login"><PhoneLogin /></Route>
        </Switch>
        <Switch>
          <Route path="/email-login"><EmailLogin /></Route>
        </Switch>
        <Switch>
          <Route path="/signup"><Signup /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
