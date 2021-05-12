import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Switch>
         
            {/* <Route path="/" exact component={Login}/>
            <Route path="/signup" component={Signup}/> */}

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            
        
      </Switch>
      </Router>
  );
}
export default App;
