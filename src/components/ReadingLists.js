import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteReadingList} from '../actions/deleteReadingList'
import LikeButton from './LikeButton'
import LikeInput from './LikeInput'
//gets RLs from RL container
//functional component cause it just has list of reading lists; can't use render
//can just use this.props in class component
//but in functional component, we have to pass props in as an arg


const ReadingLists = (props) => {


    const handleDelete = (reading_list) => {
        props.deleteReadingList(reading_list.id)
    }

    return (
        <div class="readinglists">
            {/* <LikeInput /> */}
            <br></br>
            {props.reading_lists.map(reading_list => 
           
            <li key={reading_list.id}>
            
            <a><Link to={`/reading_lists/${reading_list.id}`}>{reading_list.name}       </Link></a>
            <button class="button-rl" onClick={() => handleDelete(reading_list)}>Delete</button>
            <LikeButton />
            <br></br>
            <br></br>
            </li>)}
        </div>
    )
    
}

export default connect(null, {deleteReadingList})(ReadingLists);