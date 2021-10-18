import React from "react";
import Button from "./button";

export default class Dog extends React.Component {

  constructor() {
    super();
    console.log('constructor');
    this.state = {
      url: '',
      isLoaded: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('next state', nextState)
    // console.log('this state', this.state)
    return true;
  }
 
  fetchDog = () => {
    console.log('fetchDog called');
    this.setState( () => {
      console.log('Primeiro setState called')
      return ({isLoaded: false});
    },
      this.setState( async () => {
        console.log('Async pre segundo setState')
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log('segundo setState called')
        return ({ 
          url: data.message,
          isLoaded: true,
        });
      })
    )  
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    this.fetchDog();
  }

  handleClick = () => {
    console.log('click handler');
    this.fetchDog();
  }

  render() { 
    const { url, isLoaded} = this.state;
    console.log('renderizou');
    return isLoaded ?
      <div>
        <img src={url} alt="" />
        <Button changeAnimal={ this.handleClick } />
      </div>
      : <span>Loading...</span>
  }
}