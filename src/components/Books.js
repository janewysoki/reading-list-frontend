import React from 'react'
import Book from './Book'

const Books = (props) => {

    return (
        <div>
            {props.books && props.books.map(book =>
                <Book book={book}/>
            )}
        </div>
    )
}

export default Books;

