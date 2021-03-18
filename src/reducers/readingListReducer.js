//responsible for updating the parts of our store that has to do with reading lists
//a reducer is takes in State and action object
//action gets sent to reducer from the actions folder

export default function readingListReducer(state = {reading_lists: []}, action) {
    
    switch (action.type) {
        case 'FETCH_READING_LISTS':
            return {reading_lists: action.payload}
        case 'ADD_READING_LIST': 
            return {...state, reading_lists: [...state.reading_lists, action.payload]}
        default:
            return state
    }
       



}