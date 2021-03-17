//containsers shoud render other comps and pass them data if they require data and they can have other functions inside of them like callback functions
//typivally class components cause they may need state
//this is a top level component so we'd want to render it inside our App in App.js
import React from 'react'

class ReadingListsContainer extends React.Component {

    render() {
        return(
            <div>
                ReadingListsContainer
            </div>
        )
    }

}
