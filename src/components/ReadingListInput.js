import React from 'react'

//this is a class component because it's a form which has local state values
class ReadingListInput extends React.Component {

    render() {
        return(
            <div>
                <form>
                    <label>Reading List Name: </label>
                    <input type='text' placeholder='Name' /> <br/>
                    <label>Subject:</label>
                    <input type='text' placeholder='Subject' /> <br/>
                    <label>Description:</label>
                    <input type='text' placeholder='Description' />
                </form>
            </div>
        )
    }
}

export default ReadingListInput;