export const addBook = (book, readingListId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/reading_lists/${readingListId}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(reading_list => dispatch({type: 'ADD_BOOK', payload: reading_list}))
    }
} 

//so when you dispatch you want reading_list, not book, because book is nested with reading_list.
//instead of sending back book, we send back reading_list that book is now associated with
//so then this response will have that reading_list instead of just the book
//we will then take that reading_list and dispatch it to our reducer