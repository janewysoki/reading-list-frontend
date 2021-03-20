import React from 'react'
import {connect} from 'react-redux'
import {addBook} from '../actions/addBook'


class BookInput extends React.Component {
    
    state = {
        title: '', 
        author: '', 
        summary: '',
        comments: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBook(this.state, this.props.reading_list.id)
        this.setState({
            title: '', 
            author: '', 
            summary: '',
            comments: ''
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}> 
                    <br/>
                    <h3>ADD BOOK:</h3>
                    <label>Title: </label>
                    <input type='text' placeholder='Title' name="title" value={this.state.title} onChange={this.handleChange}/> <br/>
                    <label>Author:</label>
                    <input type='text' placeholder='Author' name="author" value={this.state.author} onChange={this.handleChange}/> <br/>
                    <label>Summary:</label>
                    <input type='text' placeholder='Summary' name="summary" value={this.state.summary} onChange={this.handleChange}/> <br/>
                    <label>Comments:</label>
                    <input type='text' placeholder='Comments' name="comments" value={this.state.comments} onChange={this.handleChange}/> <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null, {addBook})(BookInput);