
//this data comes from data from setstate in local state?
export const addReadingList = (data) => {
   //return dispatch so we have access to dispatch function from thunk
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/reading_lists', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(reading_list => {
            if (reading_list.error) {
                alert(reading_list.error)
            } else {
                dispatch({type: 'ADD_READING_LIST', payload: reading_list})
            }
        })
    }
}

