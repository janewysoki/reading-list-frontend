//responsible for updating the parts of our store that has to do with reading lists
//a reducer is takes in State and action object
//action gets sent to reducer from the actions folder

export default function readingListReducer(state = {readingLists: []}, action) {
    
    //this is just to see that our action was coming in correctly and that the store could properly be updated by our reducer
    return action.payload


}