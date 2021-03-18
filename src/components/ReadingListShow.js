import React from 'react'
import {Redirect} from 'react-router-dom'
import BooksContainer from '../containers/BooksContainer'

const ReadingListShow = (props) => {

    //let reading_list = props.reading_lists[props.match.params.id -1]
    let reading_list = props.reading_lists.filter(reading_list => reading_list.id == props.match.params.id)[0]
    
    return (
        <div>
            <h3>
                Name: {reading_list ? reading_list.name : null} <br/>
                Subject: {reading_list ? reading_list.subject : null} <br/>
                Description: {reading_list ? reading_list.description : null} <br/>
            </h3>
            <BooksContainer reading_list={reading_list}/>
        </div>
    )
}

export default ReadingListShow