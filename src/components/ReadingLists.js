import React from 'react'
import {Route, Link} from 'react-router-dom'
import ReadingListShow from './ReadingListShow'

//gets RLs from RL container
//functional component cause it just has list of reading lists; can't use render
//can just use this.props in class component
//but in functional component, we have to pass props in as an arg
const ReadingLists = (props) => {

    return (
        <div>
            {props.reading_lists.map(reading_list => 
            <div key={reading_list.id}>
            <Link path={`/reading_lists/${reading_list.id}`}>{reading_list.name}</Link>
            </div>)}
        </div>
    )
    


}

export default ReadingLists;