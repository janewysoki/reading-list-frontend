import React from 'react'
import ReadingListShow from './ReadingListShow'

//gets RLs from RL container
//functional component cause it just has list of reading lists; can't use render
//can just use this.props in class component
//but in functional component, we have to pass props in as an arg
const ReadingLists = (props) => {

    return (
        <div>
            {props.reading_lists.map(reading_list => 
            <p key={reading_list.id}><ReadingListShow reading_list={reading_list}/></p>)}
            
        </div>
    )
    


}

export default ReadingLists;