import React from 'react';

function DisplayComponent(props) {

  return (
    <div>
       &nbsp;&nbsp;
       <span>{(props.minutes >= 10)? props.minutes : "0"+ props.minutes}</span>&nbsp;:&nbsp;
       <span>{(props.seconds >= 10)? props.seconds : "0"+ props.seconds}</span>&nbsp;:&nbsp;
       <span>{(props.time >= 10)? props.time : "0"+ props.time}</span>
    </div>
  );
}

export default DisplayComponent;