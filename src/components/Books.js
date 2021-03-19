import React from 'react'

const Books = (props) => {

    //because this is a functional component we need to define this with const
    const handleDelete = () => {

    }

    return (
        <div>
            {props.books && props.books.map(book =>
                <p key={book.id}>{book.title} by {book.author} <br/> 
                Summary: {book.summary} <br/>
                Comments: {book.comments} <br/>
                <button onClick={handleDelete}>Delete Book</button> <br/></p>
            )}
        </div>
    )
}

export default Books