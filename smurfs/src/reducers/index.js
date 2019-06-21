/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURFS_REQUEST, SMURFS_SUCCESS, SMURFS_FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addSmurf: false,
  //  updatingSmurf: false
  //  deletingSmurf: false
   error: null
 }

 export default (state = initialState, action) => {
   switch (action.type) {
    case SMURFS_REQUEST:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };

      case SMURFS_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload,
        };

        case SMURFS_FAILURE:
          return {
            ...state,
            error: action.payload,
            fetchingSmurfs: false,
          };

          default:
            return state;
   }
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
