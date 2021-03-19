import React from 'react'
import BookInput from '../components/BookInput'
import Books from '../components/Books'

class BooksContainer extends React.Component {

    render() {
        return (
            <div>
                <BookInput reading_list={this.props.reading_list}/>
                <Books books={this.props.reading_list && this.props.reading_list.books}/>
            </div>
        )
    }

}

export default BooksContainer