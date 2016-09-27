 import React, { Component } from 'react';
 import CalcStore from '../stores/CalcStore'
 import Actions from '../actions/Actions';
 import Display from './Display';

 export default class Layout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      calc: CalcStore.getCalc()
    }

    this._onChange = this._onChange.bind(this);
    this._allClear = this._allClear.bind(this);
    this._plus = this._plus.bind(this);
    this._equals = this._equals.bind(this);
    this._seven = this._seven.bind(this);

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
      })
    }

    _allClear() {
      Actions.allClear();
    }

    _clear() {
      Actions.clear();
    }

    _plus() {
      Actions.plus();
    }
    
    _minus() {
      Actions.minus();
    }
    
    _multiply() {
      Actions.multiply();
    }
    
    _divide() {
      Actions.divide();
    }

    _percent() {
      Actions.percent();
    }

    _plusMinus() {
      Actions.plusMinus();
    }

    _equals() {
      Actions.equals();
    }

    _point() {
      Actions.point();
    }

    _seven() {
      Actions.seven();
    }

    _eight() {
      Actions.eight();
    }

    _nine() {
      Actions.nine();
    }

    _four() {
      Actions.four();
    }

    _five() {
      Actions.five();
    }

    _six() {
      Actions.six();
    }

    _one() {
      Actions.one();
    }

    _two() {
      Actions.two();
    }

    _three() {
      Actions.three();
    }

    _zero() {
      Actions.zero();
    }


  render() { 

    return (
      <div className="container col-xs-4">
        <h1>React Calculator</h1>
        <table className="table">
          <tbody>
            <tr>
              <Display />
            </tr>
            <tr>
              <td onClick={this._allClear}>AC</td>
              <td onClick={this._plusMinus}>+/-</td>
              <td onClick={this._percent}>%</td>
              <td className="rightRow" onClick={this._divide}>÷</td>
            </tr>
            <tr>
              <td onClick={this._seven}>7</td>
              <td onClick={this._eight}>8</td>
              <td onClick={this._nine}>9</td>
              <td className="rightRow" onClick={this._multiply}>x</td>
            </tr>
            <tr>
              <td onClick={this._four}>4</td>
              <td onClick={this._five}>5</td>
              <td onClick={this._six}>6</td>
              <td className="rightRow" onClick={this._minus}>-</td>
            </tr>
            <tr>
              <td onClick={this._one}>1</td>
              <td onClick={this._two}>2</td>
              <td onClick={this._three}>3</td>
              <td className="rightRow" onClick={this._plus}>+</td>
            </tr>
            <tr>
              <td id="bottomLeft" onClick={this._clear}>C</td>
              <td onClick={this._zero}>0</td>
              <td onClick={this._point}>.</td>
              <td id="bottomRight" className="rightRow" onClick={this._equals}>=</td>
            </tr>
          </tbody>
        </table>
        

      </div>
      )
    
  }
 }





 