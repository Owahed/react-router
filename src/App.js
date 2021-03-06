
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import FriendDetail from './component/FriendDetail/FriendDetail';




function App() {
 
  return (
   <Router>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route path="/friend/:friendsId">
          <FriendDetail></FriendDetail>
       </Route>
       <Route path='*'>
          <NoMatch></NoMatch>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
