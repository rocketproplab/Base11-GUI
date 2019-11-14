import React from 'react';

export default class Orientation extends React.Component {
  containerStyle = {
    float: "right",
    border: "1px solid black",
    width: "24%",
    height: "300px"
  };

  // innerDialStyle = {
  //   float
  // };

  render () {
    return (
      <div style={this.containerStyle}>
        // <div style={this.innerDialStyle}>
        // </div>
      </div>
    );
  }
}
