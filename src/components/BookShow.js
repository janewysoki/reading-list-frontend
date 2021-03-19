import React from 'react'
import {Redirect} from 'react-router-dom'
//import BookEdit from './BookEdit'
import BooksContainer from '../containers/BooksContainer'

const BookShow = (props) => {

    let book = props.books.filter(book => book.id == props.match.params.id)[0]
    
    return (
        <div>
            <h3>
                Title: {book ? book.title : null} <br/>
                Author: {book ? book.author : null} <br/>
                Summary: {book ? book.summary : null} <br/>
                Comments: {book ? book.comments : null} <br/>
            </h3>
            {/* <BooksContainer book={book}/> */}
            {/* <BookEdit book={book}/> */}
        </div>
    )
}

export default BookShow