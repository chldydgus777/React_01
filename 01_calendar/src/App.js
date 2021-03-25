import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "./style.css";
import { render } from "react-dom";

import addPlan from "./addPlan"
import Main from "./Main"

function App() {

  return (
    <div className="First">
      
      <h1 className="title"> Calender </h1>
      <Route exact path="/" component={Main} />
      <Route path="/addplan" component={addPlan} />
      {/* 컴포넌트를 넣어줍니다. */}
    </div>
  );
}

export default App;