 import React, { Component } from 'react';
 import CalcStore from '../stores/CalcStore'
 import Actions from '../actions/Actions';

 export default class Layout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      calc: CalcStore.getCalc(),
      display: CalcStore.getDisplay()
    }

    this._onChange = this._onChange.bind(this);

    }
    componentWillMount() {
      CalcStore.startListening(this._onChange)
    }
  
    componentWillUnmount() {
      CalcStore.stopListening(this._onChange)
    }
  
    _onChange() {
      this.setState ({
        calc: CalcStore.getCalc(),
        display: CalcStore.getDisplay()      
      })
    }

  render() { 

    const { display } = this.state;

    if (display === "") {
      return (
      <td colSpan="4" id="zero">0</td>
        )
    } else
    return (
      <td colSpan="4" id="zero">{display}</td>
      )
    
  }
 }





 