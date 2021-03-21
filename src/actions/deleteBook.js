export const deleteBook = (bookId, readingListId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/reading_lists/${readingListId}/books/${bookId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(reading_list => dispatch({type: 'DELETE_BOOK', payload: reading_list}))
    }
}