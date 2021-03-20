export const deleteReadingList = (readingListId) => {



    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/reading_lists/${readingListId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(reading_list => dispatch({type: 'DELETE_READING_LIST', payload: reading_list}))
    
    }


}