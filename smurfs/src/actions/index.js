import axios from 'axios';

export const SMURFS_REQUEST = "SMURFS_REQUEST";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILURE = "SMURFS_FAILURE";
export const ADD_REQUEST = "ADD_REQUEST";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({type: SMURFS_REQUEST})
  axios
  .get("http://localhost:3333/smurfs")
  .then(res => {
    dispatch({
      type: SMURFS_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
    type: SMURFS_FAILURE,
    payload: err.response
    })
  })
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_REQUEST});
  axios
  .post("http://localhost:3333/smurfs", newSmurf)
  .then(res => {  dispatch({
    type: ADD_SUCCESS,
    payload: res.data
  })
})
  
    .catch(err => {dispatch({
      type: ADD_FAILURE,
      payload: err.response
    })
      
    })
  
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
