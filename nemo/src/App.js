import React from "react";
import Nemo from "./Nemo"
class App extends React.Component { 
  constructor(props){
    super(props);   
   
    this.state = {

    }
    
    this.div = React.createRef();
  }

  hoverEvent = (event) => {
    console.log(event)
    console.log(event.target);
  
    event.target.style.backgroundColor = "snow";
  }


  componentDidMount(){
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount(){
    this.div.current.removeEventListener("mouseover", this.hoverEvent)
  }

    render(){
    return (  
    <div className='App' ref={this.div}>
      <Nemo/>
      </div>
    );
  }
}

export default App;
