//this is our action creator
//what we return/dispatch is an action object
//action creator creats action object and that action obkject gets dispatched to our reducer whihc will then return our new version of state based on the action that we sent
//thunk allows us to call dispatch from inside this action creator which allows us to wait for this fetch request to finish before we dispatch anything to our reducer

//reading_lists below used to say data and could say data
export function fetchReadingLists() {
   return (dispatch) => 
      fetch('http://localhost:3000/api/v1/reading_lists') 
      .then(response => response.json()) 
      .then (reading_lists => 
        
            dispatch({
         type: 'FETCH_READING_LISTS',
         payload: reading_lists
      })) 
   }
   

