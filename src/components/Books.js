import React from 'react'

const Books = (props) => {
    return (
        <div>
            {props.books && props.books.map(book =>
                <p key={book.id}>{book.title} <br/>
                By {book.author} <br/> 
                Summary: {book.summary} <br/>
                Comments: {book.comments} <br/></p>
            )}
        </div>
    )
}

export default Books