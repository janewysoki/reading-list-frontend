export const deleteReadingList = (readingListId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/reading_lists/${readingListId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                dispatch({type: 'DELETE_READING_LIST', payload: readingListId})
            }
        })
    }
}
