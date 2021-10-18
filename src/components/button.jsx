import React from "react";

export default class Button extends React.Component {

  render() {
    const { changeAnimal } = this.props;
    return <button type="button" onClick={ changeAnimal }> New Animal</button>
  }
}