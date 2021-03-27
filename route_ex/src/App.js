import React from "react";
import {render} from 'react-dom'
import {Route, Link} from 'react-router-dom'
import {withRouter} from "react-router"

import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";


class App extends React.Component{
  constructor(){
    super()

    this.state = {};
  }

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
      <div className="App">
        <div>
        <Link to="/">Home으로가기 ! </Link>
        <Link to="/cat/나비">Cat으로가기</Link>
        <Link to="/Dog">Dog으로가기</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/Cat/:cat_name" component={Cat} />
        <Route path="/Dog" component={Dog} />

        <button onClick={()=>
          {this.props.history.push("/cat/나비")
        }} > Cat으로가기 !</button>
        <button onClick ={()=>{
          this.props.history.goBack();
        }}> 뒤로가기 !</button>
      
      </div>
    )
  }
}


export default withRouter(App);