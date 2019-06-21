import axios from 'axios';

export const SMURFS_REQUEST = "SMURFS_REQUEST";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILURE = "SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  axios
  .get("http://localhost:3333/smurfs")
  .then(res => console.log(res))
  .catch(err => console.log(err))
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
