import React from "react";

const AddTripButton = props => {
  return (
    <div className="intro__body wysiwyg">
      <button className="example_f" onClick={props.addTrip}>
        <span>EMAIL ME</span>
      </button>{" "}
    </div>
  );
};

export default AddTripButton;