import React from "react";

class Pops extends React.Component {
  render() {
    return (
      <div>
        This is a class component using props system
        <p>
          {this.props.name} and {this.props.age} are printed using props system
          and using this keyword
        </p>
        <p>Also we are resuing other component using props children property</p>
        {this.props.children}
      </div>
    );
  }
}
export default Pops;
