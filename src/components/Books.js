import React from 'react'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'
import {Route, Link} from 'react-router-dom'
import BookShow from './BookShow'

const Books = (props) => {

    //because this is a functional component we need to define this with const
    const handleDelete = (book) => {
        //bceause this is a functional component, we use props.deletebook here instead of THIS.props.deleteBook
        props.deleteBook(book.id, book.reading_list.id)
    }

    return (
        <div>
            {props.books && props.books.map(book =>
                <p key={book.id}>
                {/* <Link to={`/reading_lists/${reading_list.id}/books/${book.id}`}> */}
                    {book.title} by {book.author} <br/> 
                {/* </Link>  */}
                Summary: {book.summary} <br/>
                Comments: {book.comments} <br/>
                <button onClick={() => handleDelete(book)}>Delete Book</button> <br/></p>
            )}
        </div>
    )
}

export default Books;


