import React from 'react'

//this is a class component because it's a form which has local state values
class ReadingListInput extends React.Component {
    //this is local state not redux store
    state = {name: '', subject: '', description: ''}

    render() {
        return(
            <div>
                <form>
                    <label>Reading List Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name}/> <br/>
                    <label>Subject:</label>
                    <input type='text' placeholder='Subject' value={this.state.subject}/> <br/>
                    <label>Description:</label>
                    <input type='text' placeholder='Description' value={this.state.description}/>
                </form>
            </div>
        )
    }
}

export default ReadingListInput;