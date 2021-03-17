
import React from 'react';
import {connect} from 'react-redux'
import {fetchReadingLists} from './actions/fetchReadingLists'

class App extends React.Component {


  componentDidMount() {
    this.props.fetchReadingLists({type: 'FETCH_READING_LISTS', payload: {name: 'Early Education'}})
  }



  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
  
}

//fetchReadingLists is action creator that gives us ability to update our store directly from this component 
//gives us access to this.props.fetchReadingLists()
//connect is giving us access to store.dispatch({type, payload})
export default connect(null, {fetchReadingLists})(App);
