import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _display = "";
let _calc = "";
let equals = false;

class CalcStore extends EventEmitter {

  constructor() {
    super();
    AppDispatcher.register(action => {

      switch(action.type) {

        case 'ALL_CLEAR': {
        _calc = ""
        _display = "AC"
        this.emit('CHANGE')
        setTimeout(() => {_display = ""; this.emit('CHANGE')}, 1000)
        break}

        case 'CLEAR':{
        _calc = _calc.slice(0, -1)        
        _display = _display.slice(0, -1)
        this.emit('CHANGE')
        break; }

        case 'PLUS':{
        if (_calc[_calc.length - 1] === '+' || _calc[_calc.length - 1] === '-' || _calc[_calc.length - 1] === '*' || _calc[_calc.length - 1] === '/' || _calc[_calc.length - 1] === '.' ){
          _calc = _calc.slice(0, -1);
        }
        _calc = _calc + '+'
        _display = "+"
        this.emit('CHANGE')
        break; }

        
        case 'MINUS':{
        if (_calc[_calc.length - 1] === '+' || _calc[_calc.length - 1] === '-' || _calc[_calc.length - 1] === '*' || _calc[_calc.length - 1] === '/' || _calc[_calc.length - 1] === '.' ){
          _calc = _calc.slice(0, -1);
        }
        _calc = _calc + '-'
        _display = "-"
        this.emit('CHANGE')
        break; }

        
        case 'MULTIPLY':{
        if (_calc[_calc.length - 1] === '+' || _calc[_calc.length - 1] === '-' || _calc[_calc.length - 1] === '*' || _calc[_calc.length - 1] === '/' || _calc[_calc.length - 1] === '.' ){
          _calc = _calc.slice(0, -1);
        }
        _calc = _calc + '*'
        _display = "x"
        this.emit('CHANGE')
        break; }

        
        case 'DIVIDE':{
        if (_calc[_calc.length - 1] === '+' || _calc[_calc.length - 1] === '-' || _calc[_calc.length - 1] === '*' || _calc[_calc.length - 1] === '/' || _calc[_calc.length - 1] === '.' ){
          _calc = _calc.slice(0, -1);
        }
        _calc = _calc + '/'
        _display = "÷"
        this.emit('CHANGE')
        break; }
        
        case 'PERCENT':{
        _calc = _calc + '/ 100'
        _display = "%"
        this.emit('CHANGE')
        break;}
        
        case 'PLUS_MINUS':{
        _calc = _calc + '* -1'
        _display = _display * -1
        this.emit('CHANGE')
        break; }

        case 'EQUALS':{
        _calc = eval(_calc)
        let num = eval(_calc)
        _display = Math.round(num * 100) / 100
        this.emit('CHANGE')
        break;  }

        case 'POINT':{
        if (_calc[_calc.length - 1] === '+' || _calc[_calc.length - 1] === '-' || _calc[_calc.length - 1] === '*' || _calc[_calc.length - 1] === '/' || _calc[_calc.length - 1] === '.' ){
          _calc = _calc.slice(0, -1);
        }
        _calc = _calc + '.'
        _display = _display + '.'
        this.emit('CHANGE')
        var first = _display.indexOf('.');
        var last = _display.lastIndexOf('.');
        if (first !== last){
          _calc = _calc.slice(0, -1);
          _display = _display.slice(0, -1)
          this.emit('CHANGE')
        }
        break; }

        case 'SEVEN':
        _calc = _calc + '7'
        _display = _display + '7'
        this.emit('CHANGE')
        break;

        case 'EIGHT':
        _calc = _calc + '8'
        _display = _display + '8'
        this.emit('CHANGE')
        break;

        case 'NINE':
        _calc = _calc + '9'
        _display = _display + '9'
        this.emit('CHANGE')
        break; 

      
        case 'FOUR':
        _calc = _calc + '4'
        _display = _display + '4'
        this.emit('CHANGE')
        break; 

      
        case 'FIVE':
        _calc = _calc + '5'
        _display = _display + '5'
        this.emit('CHANGE')
        break; 

      
        case 'SIX':
        _calc = _calc + '6'
        _display = _display + '6'
        this.emit('CHANGE')
        break; 

      
        case 'ONE':
        _calc = _calc + '1'
        _display = _display + '1'
        this.emit('CHANGE')
        break; 

      
        case 'TWO':
        _calc = _calc + '2'
        _display = _display + '2'
        this.emit('CHANGE')
        break; 

      
        case 'THREE':
        _calc = _calc + '3'
        _display = _display + '3'
        this.emit('CHANGE')
        break; 

        case 'ZERO':
        _calc = _calc + '0'
        _display = _display + '0'
        this.emit('CHANGE')
        break; 

      }
      console.log(_calc)
    });

    this.on('CHANGE',() => {
    });

  } 

  zeroAC() {
    _display="0";
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getCalc() {
    return _calc;
  }

  getDisplay() {
    return _display;
  }
}
export default new CalcStore();