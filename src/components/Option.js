import React from 'react';



  const Option = (props) => {
    return (
      <div className="option">
      <p className = "option__text">
      {props.count}.{props.optionText}</p>
        <button className ="button--Link"
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
  };

  export default Option;