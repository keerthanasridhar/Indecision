import React from 'react';
import Option from './Option'

  const Options = (props) =>  (
    <div>
    <div className="widget_header">
    <h3 className = "widget_header__title">Your Options</h3>
    <button className="button--Link"
     onClick={props.handleDeleteOptions}>Remove All
     </button>
    </div>
   <div className = "widget__message">
   {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option,index) => (
          <Option
            key={option}
            optionText={option}
            count = {index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
   </div>
      
    </div>
  );
export default Options;