import React from "react";

class ComponentCycle extends React.Component {

  constructor(props){
    super(props);
  }

componentWillMount(){
console.log("Will mount");
  }

componentDidMount()
{
console.log("Did mount");

}
shouldComponentUpdate(){
console.log("Should component update");

}
componentDidUpdate(){
console.log("Component did update");

}

  render(){
    return (<div>I'm alive</div>)
  }
}

export default ComponentCycle;