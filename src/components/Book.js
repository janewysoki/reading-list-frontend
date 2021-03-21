import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'

const Book = ({book, deleteBook}) => {

     //because this is a functional component we need to define this with const
     const handleDelete = (book) => {
        //bceause this is a functional component, we use props.deletebook here instead of THIS.props.deleteBook
        deleteBook(book.id, book.reading_list_id)
    }

    return(
        <p key={book.id}>
            {book.title} by {book.author} <br/> 
            Summary: {book.summary} <br/>
            Comments: {book.comments} <br/>
            <button class ="button" onClick={() => handleDelete(book)}>Delete Book</button> <br/>
        </p>
    )
}

export default connect(null, {deleteBook})(Book);
