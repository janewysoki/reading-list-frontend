import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteReadingList} from '../actions/deleteReadingList'
//gets RLs from RL container
//functional component cause it just has list of reading lists; can't use render
//can just use this.props in class component
//but in functional component, we have to pass props in as an arg
const ReadingLists = (props) => {

    const handleDelete = (reading_list) => {
        props.deleteReadingList(reading_list.id)
    }

    return (
        <div>
            {props.reading_lists.map(reading_list => 
            <li key={reading_list.id}>
            <Link to={`/reading_lists/${reading_list.id}`}>{reading_list.name }</Link>
            <button class="button" onClick={() => handleDelete(reading_list)}>Delete</button>
            </li>)}
        </div>
    )
    


}

export default connect(null, {deleteReadingList})(ReadingLists);