import React from 'react'
import ReadingLists from './ReadingLists'



class LikeButton extends React.Component {
    
    //     constructor(props) {
//         super(props)
//         this.state = {
//             input: '',
//             likes: this.props.likes
//     };
//   }

    state = {
        input: '',
        likes: 0,
    }
    
    handleInput = (e) => {
        this.setState({
             input: e.target.value
             //key/value above
        })
}
    handleLike = () => {
        let newCount = parseInt(this.state.likes, 10) + parseInt(this.state.input, 10)
       
        this.setState({
            likes: newCount 
        })
    }

   

    // handleLike = () => {
    //     this.setState(prevState => ({
    //         likes: prevState.likes + this.state.input
    //     }));
    // }

    render() {
        return (
            <div>
                <input type='number' onChange={this.handleInput} value={this.state.input} /> 
                <button onClick={this.handleLike}> Likes: {this.state.likes} </button>
            </div>
        )
    }
}


export default LikeButton