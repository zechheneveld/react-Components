import React from "react";

class ComponentState extends React.Component {

  constructor(props){
    super(props);

    this.state = {onFire: false};
  }
  toggleFire = () => {
    this.setState({onFire: !this.state.onFire})
  }

render(){
  return (<div>it works, and is <button className="btn btn-success" onClick={this.toggleFire}>{this.state.onFire?"on fire":"dry"}</button></div>)
  }
}

export default ComponentState;