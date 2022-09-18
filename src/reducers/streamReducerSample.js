// Sample code!!!

import { EDIT_STREAM } from "../actions/types";

// Array-based approach
// const streamReducer = (state = [], action) => {
//   switch(action.type){
//     case EDIT_STREAM:
//       return state.map(stream => {
//           if(action.payload.id === stream.id) {
//             return action.payload;
//           } else {
//             return stream;
//           } 
//       })
//     default: 
//       return state;
//   }
// }

// Object-based approach
const streamReducer = (state = {}, action) => {
  switch(action.type) {
    case EDIT_STREAM:
      // ALT 1.1
      // const newState = {...state};
      // newState[action.payload.id] = action.payload;
      // return newState;
      // ALT 1.2 ES 2015 key interpolation syntax
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}


export default streamReducer;