import React from 'react'
import {connect} from 'react-redux'


class BookInput extends React.Component {
    
    state = {
        title: '', 
        author: '', 
        summary: '',
        comments: ''
    }
    
    render() {
        return (
            <div>
               <form> 
                    <label>Title: </label>
                    <input type='text' placeholder='Title' name="title" value={this.state.title}/> <br/>
                    <label>Author:</label>
                    <input type='text' placeholder='Author' name="author" value={this.state.author}/> <br/>
                    <label>Summary:</label>
                    <input type='text' placeholder='Summary' name="summary" value={this.state.summary}/> <br/>
                    <label>Comments:</label>
                    <input type='text' placeholder='Comments' name="comments" value={this.state.comments}/> <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null)(BookInput);