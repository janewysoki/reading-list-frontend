import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div class="navbar">
            <a class="navbarlinks"><Link to='/' style={{paddingRight: '10px'}}> Home </Link></a>
            <a class="navbarlinks"><Link to='/reading_lists' style={{paddingRight: '10px'}}>Reading Lists</Link></a>
            <a class="navbarlinks"><Link to='/reading_lists/new'> Add Reading List</Link></a><br/><br/>
            <p></p>
        </div>
    )
}

export default NavBar