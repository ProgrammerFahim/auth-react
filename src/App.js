import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PhoneLogin from './components/PhoneLogin';
import EmailLogin from './components/EmailLogin';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  return (
    <div className="App">
      <h1 className="title-banner">Company Title</h1>
      {token? <h3 className="logged-in">Hello, user, you are now logged in!</h3> : null}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Link className="normal-btn" to="/login">Log In</Link></Route>
        </Switch>
        <Switch>
          <Route path="/login"><Login token={token} setToken={setToken} /></Route>
        </Switch>
        <Switch>
          <Route path="/phone-login"><PhoneLogin token={token} setToken={setToken} /></Route>
        </Switch>
        <Switch>
          <Route path="/email-login"><EmailLogin token={token} setToken={setToken} /></Route>
        </Switch>
        <Switch>
          <Route path="/signup"><Signup token={token} setToken={setToken} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
