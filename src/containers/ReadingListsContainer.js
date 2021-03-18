//containsers shoud render other comps and pass them data if they require data and they can have other functions inside of them like callback functions
//typivally class components cause they may need state
//this is a top level component so we'd want to render it inside our App in App.js which is why we export it below
import React from 'react'
import {connect} from 'react-redux'
import {fetchReadingLists} from '../actions/fetchReadingLists'
import ReadingLists from '../components/ReadingLists'
import ReadingListInput from '../components/ReadingListInput'


class ReadingListsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchReadingLists()
    }
 
    render() {
        return(
            <div>
                <ReadingListInput/><br></br>
                <ReadingLists reading_lists={this.props.reading_lists}/>
            </div>
        )
    }

}

//state here is state from our redux store
const mapStateToProps = state => {
    return {
        reading_lists: state.reading_lists
    }
         
}


export default connect(mapStateToProps, {fetchReadingLists})(ReadingListsContainer);