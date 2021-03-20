import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <Link to='/' style={{paddingRight: '10px'}}> Home </Link>
            <Link to='/reading_lists' style={{paddingRight: '10px'}}>Reading Lists</Link>
            <Link to='/reading_lists/new'> Add Reading List</Link><br/><br/>
        </div>
    )
}

export default NavBar