import React from 'react'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'

const Books = (props) => {

    //because this is a functional component we need to define this with const
    const handleDelete = (bookId, readingListId) => {
        //bceause this is a functional component, we use props.deletebook here instead of THIS.props.deleteBook
        props.deleteBook()
    }

    return (
        <div>
            {props.books && props.books.map(book =>
                <p key={book.id}>{book.title} by {book.author} <br/> 
                Summary: {book.summary} <br/>
                Comments: {book.comments} <br/>
                <button onClick={() => handleDelete(book.id, book.reading_list.id)}>Delete Book</button> <br/></p>
            )}
        </div>
    )
}

export default connect(null, {deleteBook})(Books);