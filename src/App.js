import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigationbar from './components/Home/Navigationbar/Navigationbar';
import Login from './components/Signup/Login';
import Signup from './components/Signup/Signup';
import PrivateRoute from './components/Signup/PrivateRoute';
import DashBoard from './components/DashBoard/DashBoard';
function App() {
  return (
    <div className="App">
    <Router>
    
      <Navigationbar></Navigationbar>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
          </PrivateRoute>
        <Route path="/">
          
        </Route>
      </Switch>
  </Router>
    </div>
  );
}

export default App;
