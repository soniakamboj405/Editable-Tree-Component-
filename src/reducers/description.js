/**
 * description reducers
 * @param {*} state 
 * @param {*} action 
 */
 export function description(state = {}, action) {
    switch (action.type) {
      case "REQUEST":
        return {
          data: {...state}
        };
      case "SUCCESS":
        return {
          ...state,
          data: action.response,
        };
      case "FAILURE":
        return {
          ...state,
          data: action.error,
        };
        case "GET_REQUEST":
          return {
            ...state,
            getData: ""
          };
        case "GET_SUCCESS":
          return {
            ...state,
            getData: action.response,
            isSuccess: true
          };
        case "GET_FAILURE":
          return {
            ...state,
            getData: action.error,
            isSuccess: false
          };
      case "CLEAR":
        return {};
      default:
        return state
    }
  }