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
                    <input type='text' placeholder='Title' /> <br/>
                    <label>Author:</label>
                    <input type='text' placeholder='Author'/> <br/>
                    <label>Summary:</label>
                    <input type='text' placeholder='Summary' /> <br/>
                    <label>Comments:</label>
                    <input type='text' placeholder='Comments' /> <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null)(BookInput);