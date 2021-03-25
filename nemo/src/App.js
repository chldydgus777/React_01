import React from "react";
import Nemo from "./Nemo"
class App extends React.Component { 
  constructor(props){
    super(props);

    this.state = {
      count : 3,
      cnt : 5
    };
  }

  addNemo = () => {
    this.setState({count: this.state.count + 1});
    console.log("addNemo")
  }

  removeNemo = () => {
    if (this.state.count > 0) { 
      this.setState({count: this.state.count - 1});
      }else { 
        window.alert("네모가없습니다 ")
      }
    
    
  }

    render(){
    const nemo_count = Array.from({length: this.state.count}, (a, idx)=> (idx))
    console.log(nemo_count)
    return (  
    <div className='App'>
      <Nemo/>
      </div>
    );
  }
}

export default App;
