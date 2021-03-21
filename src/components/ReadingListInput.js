import React from 'react'
import {connect} from 'react-redux'
import {addReadingList} from '../actions/addReadingList'


//this is a class component because it's a form which has local state values
class ReadingListInput extends React.Component {
    //this is local state not redux store
    //this state could be in a constructor too but not necessary
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

    //this data, creating new RL, should go to our database and upadte redux store
   //preventdefault so it doesn't rerender, without calling this we'd lose all our form data when it rerenders
    handleSubmit = (event) => {
        event.preventDefault() 
        this.props.addReadingList(this.state)
        .then (() => this.props.history.push('/reading_lists'))
        //this sets the form boxes back to their initial values so what you entered doesn't stay on the screen after submitting it
        
        // this.setState({ //set state is async so you could put this between preventefault and this.props.addReadingList
        //     name: '', 
        //     subject: '', 
        //     description: ''
        // })

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/> <br/>
                    <label>Subject:</label>
                    <input type='text' placeholder='Subject' value={this.state.subject} name="subject" onChange={this.handleChange}/> <br/>
                    <label>Description:</label>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/> <br/>
                    <input class="button" type='submit'/>
                </form>
            </div>
        )
    }
}

//this dpesn't care about what's in the store, just about adding to it
export default connect(null, {addReadingList})(ReadingListInput);