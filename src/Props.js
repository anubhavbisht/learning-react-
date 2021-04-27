import React from "react";

const Props = (props) => {
  return (
    <div>
      <p>This is a functional component are we are using props system</p>
      <p>
        {props.name} and {props.age} this has been printed using props{" "}
      </p>
      <p>Also we are resuing other component using props children property</p>
      {props.children}
    </div>
  );
};
export default Props;
