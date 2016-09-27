import AppDispatcher from '../AppDispatcher';

const Actions = {
  
  allClear() {
    AppDispatcher.dispatch({
      type: 'ALL_CLEAR'
    })
  },

  clear() {
    AppDispatcher.dispatch({
      type: 'CLEAR'
    })
  },

  plus() {
    AppDispatcher.dispatch({
      type: 'PLUS'
    })
  },

  minus() {
    AppDispatcher.dispatch({
      type: 'MINUS'
    })
  },

  multiply() {
    AppDispatcher.dispatch({
      type: 'MULTIPLY'
    })
  },

  divide() {
    AppDispatcher.dispatch({
      type: 'DIVIDE'
    })
  },

  percent() {
    AppDispatcher.dispatch({
      type: 'PERCENT'
    })
  },

  plusMinus() {
    AppDispatcher.dispatch({
      type: 'PLUS_MINUS'
    })
  },

  equals() {
    AppDispatcher.dispatch({
      type: 'EQUALS'
    })
  },

  point() {
    AppDispatcher.dispatch({
      type: 'POINT'
    })
  },

  seven() {
    AppDispatcher.dispatch({
      type: 'SEVEN'
    })
  },

  eight() {
    AppDispatcher.dispatch({
      type: 'EIGHT'
    })
  },

  nine() {
    AppDispatcher.dispatch({
      type: 'NINE'
    })
  },
  
  four() {
    AppDispatcher.dispatch({
      type: 'FOUR'
    })
  },

  five() {
    AppDispatcher.dispatch({
      type: 'FIVE'
    })
  },

  six() {
    AppDispatcher.dispatch({
      type: 'SIX'
    })
  },

  one() {
    AppDispatcher.dispatch({
      type: 'ONE'
    })
  },

  two() {
    AppDispatcher.dispatch({
      type: 'TWO'
    })
  },

  three() {
    AppDispatcher.dispatch({
      type: 'THREE'
    })
  },

  zero() {
    AppDispatcher.dispatch({
      type: 'ZERO'
    })
  }
}
export default Actions;
