import React from 'react'
import ReadingListEdit from './ReadingListEdit'
import BooksContainer from '../containers/BooksContainer'

const ReadingListShow = (props) => {

    //let reading_list = props.reading_lists[props.match.params.id -1]
    let reading_list = props.reading_lists.filter(reading_list => reading_list.id == props.match.params.id)[0]
    
    return (
        <div>
            <h3 class="rlshowpage">
                Name: {reading_list ? reading_list.name : null} <br/>
                Subject: {reading_list ? reading_list.subject : null} <br/>
                Description: {reading_list ? reading_list.description : null} <br/>
            </h3>
            <p><BooksContainer reading_list={reading_list}/></p>
            <ReadingListEdit reading_list={reading_list}/>
        </div>
    )
}

export default ReadingListShow