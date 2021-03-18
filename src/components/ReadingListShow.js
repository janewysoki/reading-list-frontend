import React from 'react'
import {Redirect} from 'react-router-dom'


const ReadingListShow = (props) => {

    let reading_list = props.reading_lists[props.match.params.id -1]

    return (
        <div>
            <h3>
                Name: {reading_list ? reading_list.name : null} <br/>
                Subject: {reading_list ? reading_list.subject : null} <br/>
                Description: {reading_list ? reading_list.description : null} <br/>
            </h3>
        </div>
    )
}

export default ReadingListShow