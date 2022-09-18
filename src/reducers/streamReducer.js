// Sample code!!!

import { EDIT_STREAM } from "../actions/types";

// Array-based approach
const streamReducer = (state = [], action) => {
  switch(action.type){
    case EDIT_STREAM:
      return state.map(stream => {
          if(action.payload.id === stream.id) {
            return action.payload;
          } else {
            return stream;
          } 
      })
    default: 
      return state;
  }
}

export default streamReducer;