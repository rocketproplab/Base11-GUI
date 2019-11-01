import React from 'react';

export default class Orientation extends React.Component {
  dialStyle = {
    float: "right",
    border: "1px solid black",
    width: "24%",
    height: "300px"
  };

  render () {
    return (
      <div style={this.dialStyle}></div>
    );
  }
}
