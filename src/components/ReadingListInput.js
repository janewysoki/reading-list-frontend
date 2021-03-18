import React from 'react'

//this is a class component because it's a form which has local state values
class ReadingListInput extends React.Component {
    //this is local state not redux store
    state = {
        name: '', 
        subject: '', 
        description: ''
    }

    //pass event as param so it knows what to change
    //when i make a change, invoke this function by adding onchange to form
    handleChange = (event) => {
        this.setState({
            //inside brackets beaucse without them it would try to give state a key of event.target.name
            //brackets first evaluates what's in the brackets; evaluates it to be name, subj or descrip
            //way to assign a key with a value that needs to be evaluated first
            [event.target.name]: event.target.value
        })

    }

    render() {
        return(
            <div>
                <form>
                    <label>Reading List Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/> <br/>
                    <label>Subject:</label>
                    <input type='text' placeholder='Subject' value={this.state.subject} name="subject" onChange={this.handleChange}/> <br/>
                    <label>Description:</label>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default ReadingListInput;