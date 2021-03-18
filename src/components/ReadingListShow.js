import React from 'react'

const ReadingListShow = (props) => {

    return (
        <div>
            Name: {props.reading_list.name} <br/>
            Subject: {props.reading_list.subject} <br/>
            Description: {props.reading_list.description}
        </div>
    )
}

export default ReadingListShow