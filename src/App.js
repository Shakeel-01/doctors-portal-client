import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     <Switch>
       <Route exact path='/'>
          <Home></Home>
       </Route>
       <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>
       <Route path='/appointment'>
         <Appointment/>
       </Route>
       <Route path='/dashboard/appointment'>
         <Dashboard/>
       </Route>
       <Route path='/login'>
         <Login></Login>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
