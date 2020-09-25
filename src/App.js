
import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import NotMatch from './Components/NotMatch/NotMatch';
import News from './Components/News/News';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { useScrollTrigger } from '@material-ui/core';
import Coxbazar from './Components/Coxbazar/Coxbazar';
import Sreemangal from './Components/Sreemangal/Sreemangal';
import Sundarban from './Components/Sundorban/Sundarban';
import HotelDetail from './Components/HotelDetail/HotelDetail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




export const UserContext = createContext();

function App(props) {
  const [signedInUser, setSignedInUser] = useState({});
  return (
   
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
    
      <Router>
        <Navbar></Navbar>
        <Switch>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
             <Login></Login>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/News">
                 <News></News>
            </Route>
            <Route path="/src/Components/Coxbazar/Coxbazar.js">
                <Coxbazar></Coxbazar>
            </Route>
            <Route path="/src/Components/Sreemangal/Sreemangal.js">
                <Sreemangal></Sreemangal>
            </Route>
            <Route path="/src/Components/Sundorban/Sundarban.js">
                <Sundarban></Sundarban>
            </Route>
            <PrivateRoute path="/HotelDetail">
              <HotelDetail></HotelDetail>
            </PrivateRoute>
            <Route exact path="/">
              <Destination></Destination>
            </Route>
            <Route  path="*">
              <NotMatch></NotMatch>
            </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
 
  );
};

export default App;