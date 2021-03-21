import React from 'react'
import {connect} from 'react-redux'
import {editReadingList} from '../actions/editReadingList'

class ReadingListEdit extends React.Component {
    
    state = {
        name: '', 
        subject: '', 
        description: ''
    }

    handleChange = (event) => {
        this.setState({  
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() 
        let reading_list = {...this.state, id: this.props.reading_list.id}
        this.props.editReadingList(reading_list)
        this.setState({ 
            name: '', 
            subject: '', 
            description: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <br/><br/>
                    <h3>EDIT READING LIST: </h3>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/> <br/>
                    <input type='text' placeholder='Subject' value={this.state.subject} name="subject" onChange={this.handleChange}/> <br/>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/> <br/>
                    <input class="button" type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null, {editReadingList})(ReadingListEdit);