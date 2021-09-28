import React from 'react';

function DisplayComponent(props) {

  return (
    <div>
       &nbsp;
       <span>{(props.time >= 10)? props.time/10 : "0"+ props.time/10}</span>&nbsp;:&nbsp;
       <span>{(props.time >= 10)? props.time : "0"+ props.time}</span>
    </div>
  );
}

export default DisplayComponent;