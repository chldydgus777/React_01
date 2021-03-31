import React from 'react';
// import './App.css';
import PostList from "../pages/PostList";
import Login from "../pages/Login"
import Header from "../components/Header"
import Signup from "../pages/Signup"
import PostWrite from "../pages/PostWrite"

import {BrowserRouter, Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configureStore";
import {Grid, Button} from "../elements"

import {actionCreators as userActions} from '../redux/modules/user' 
import {useDispatch} from "react-redux"
import {apikey} from "./firebase"
import Permit from "./permit"
import styled from "styled-components"


function App() {
  const dispatch = useDispatch();

      const _session_key = `firebase:authUser:${apikey}:[DEFAULT]`
      const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(()=> {
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  }, []);


return (

    <div className="App">
      <React.Fragment>
        <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Write" exact component={PostWrite} />
        </ConnectedRouter>
        </Grid>
        <Permit>
          <Button is_float text="+"></Button>
        </Permit>
            
      </React.Fragment>
    </div>
  );

}


export default App;
