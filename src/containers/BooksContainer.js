import React from 'react'
import BookInput from '../components/BookInput'
import Books from '../components/Books'

class BooksContainer extends React.Component {

    render() {
        return (
            <div>
                <Books books={this.props.reading_list && this.props.reading_list.books}/>
                <BookInput reading_list={this.props.reading_list}/>
            </div>
        )
    }

}

export default BooksContainer