import React from 'react'

//gets RLs from RL container
//functional component cause it just has list of reading lists; can't use render
//can just use this.props in class component
//but in functional component, we have to pass props in as an arg
const ReadingLists = (props) => {

    return (
        <div>
            {props.reading_lists.map(reading_list => <li>{reading_list.name} - {reading_list.subject} - {reading_list.description}</li>)}
        </div>
    )
    


}

export default ReadingLists;