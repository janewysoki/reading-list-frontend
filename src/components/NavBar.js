import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <Link to='/reading_lists' style={{paddingRight: '10px'}}>Reading Lists</Link>
            <Link to='/reading_lists/new'> Add Reading List</Link>
        </div>
    )
}

export default NavBar