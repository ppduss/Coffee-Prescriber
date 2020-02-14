import React { useState }from 'react';


class Child1 extends React.Component{
sendData = () => {
         this.props.parentCallback("Hey Popsie, How’s it going?");
    },
render() { 
//you can call function sendData whenever you'd like to send data from child component to Parent component.
    }
};


export default Child1;


