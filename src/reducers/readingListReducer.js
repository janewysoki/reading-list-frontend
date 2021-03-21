//responsible for updating the parts of our store that has to do with reading lists
//a reducer is takes in State and action object
//action gets sent to reducer from the actions folder
//only using 1 reducer since every time we access book we do it through reading list
export default function readingListReducer(state = {reading_lists: []}, action) {
    switch (action.type) {
        case 'FETCH_READING_LISTS':
            return {reading_lists: action.payload}
        case 'ADD_READING_LIST': 
            return {...state, reading_lists: [...state.reading_lists, action.payload]}
        case 'ADD_BOOK':
            //we want to return new array from RLs go through every RL, if RL id s not the same as RL coming in, we leave it, otherwise we wanna replace it with that Rl that's coming in
            let reading_lists = state.reading_lists.map(reading_list => {
                if (reading_list.id === action.payload.id) {
                    return action.payload
                } else {
                    return reading_list
                }
            })
            return {...state, reading_lists: reading_lists}
        case 'DELETE_BOOK':
            let reading_lists_two = state.reading_lists.map(reading_list => {
                if (reading_list.id === action.payload.id) {
                    return action.payload
                } else {
                    return reading_list
                }
            })
            return {...state, reading_lists: reading_lists_two}
        case 'EDIT_READING_LIST': 
            let reading_lists_three = state.reading_lists.map(reading_list => {
                if (reading_list.id === action.payload.id) {
                    return action.payload
                } else {
                    return reading_list
                }
            })
            return {...state, reading_lists: reading_lists_three}
        case 'DELETE_READING_LIST':
            let reading_lists_four = state.reading_lists.filter(reading_list => {
                return reading_list.id !== action.payload
            })
            return {...state, reading_lists: reading_lists_four}
        default:
            return state
    }
}