import React from 'react'

const ReadingListShow = (props) => {

    let reading_list = props.reading_lists[props.match.params.id -1]

    return (
        <div>
            Name: {reading_list ? reading_list.name : null} <br/>
            Subject: {reading_list ? reading_list.subject : null} <br/>
            Description: {reading_list ? reading_list.description : null} <br/>
        </div>
    )
}

export default ReadingListShow