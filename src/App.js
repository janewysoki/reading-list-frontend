
import React from 'react';
import {connect} from 'react-redux'
//import {fetchReadingLists} from './actions/fetchReadingLists'
import ReadingListsContainer from './containers/ReadingListsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <ReadingListsContainer/>
      </div>
    );
  }
  
}

//fetchReadingLists is action creator that gives us ability to update our store directly from this component 
//gives us access to this.props.fetchReadingLists()
//connect runs store.dispatch({type, payload}) for us so we don't hard code it?
export default App;
