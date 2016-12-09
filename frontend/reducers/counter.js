import { INCREMENT, DECREMENT } from './../actions/counter';

let initialState = {
  value: 0
}

const counter = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      }

      // Object.assign({}, state, {
      //   value: state.value + 1
      // })
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - 1
      })
    default:
      return state;
  }
}

export default counter
