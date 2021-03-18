componentDidMount() {
  fetch('http://localhost:3000/api/v1/reading_lists/1') 
  <!-- //async get request (default fetch request is get) - won't do anything with data till we get response back -->
  .then(response => response.json()) 
  <!-- //turn response into json -->
  .then (data => console.log(data)) 
  <!-- //the response that we get turned into json becomes data here (could still call it response)
 //the return value of previous then comes in as argument in next one (i.e. response.json becomes data in second .then) -->
}

componentDidMount() {
  fetch('http://localhost:3000/api/v1/reading_lists') 
  .then(response => response.json()) 
  .then (data => console.log(data)) 
}



<!-- first checks serializers before models. serializer knows when you render json to first check serializer to send to frontend? -->


<!-- container components are still components, usually class componnets and usually render other components and contain other components
containers are kind of a parent to the other components  -->


App.js
<!-- //mapStateToProps gives us access to see what is already in our store
//and we have to pass it below to connect because connect is out way of connecting redux store to this specifc component 
//gives us access to this.props.readingLists -->
 const mapStateToProps = () => {
   return {

   }
 }

App.js
<!-- //fetchReadingLists is action creator that gives us ability to update our store directly from this component 
//gives us access to this.props.fetchReadingLists() -->
export default connect(mapStateToProps, {fetchReadingLists})(App);



readingListReducer.js
<!-- //responsible for updating the parts of our store that has to do with reading lists
//a reducer is takes in State and action object
//action gets sent to reducer from the actions folder -->
export default function readingListReducer(state = {readingLists: []}, action) {   
<!-- this is just to see that our action was coming in correctly and that the store could properly be updated by our reducer -->
    return action.payload
}

App.js
<!-- connect runs store.dispatch({type, payload}) for us so we don't hard code it? -->
export default connect(null, {fetchReadingLists})(App);


export default function readingListReducer(state = {reading_lists: []}, action) {
    
    //this is just to see that our action was coming in correctly and that the store could properly be updated by our reducer
    return action.payload


}

fetchReadingLists.js
<!-- action creators typically before you incorporate a fetch request or any type of async reqiuest return regular JS objects that have a type and payload -->
{type: 'asdf', payload: }
<!-- then once an action creator retusn something like this our the connect function in  ReadingListsContainer pispatched whatever that action is to our reducer for us -->
since fetch request takes time, we can't return that action right away and we ont want our connect function to auto call dipatch for us. we instead use it inside our action creator so we can call dispatch ____;

thunk allows us to use dispatch inside action creators



readingLists.js
const ReadingLists = (props) => {
    return (
        <div>
            <!-- need props first because thats the info being passed from RL container to component of RLs -->
            {props.reading_lists.map(reading_list => <li>{reading_list.name} {reading_list.subject} {reading_list.description}</li>)}
        </div>
    )
}


index.js
<!-- //below we wrap App with Provider so that the store is global to any component we create?
//any child of our App component will have access to the store that we have to pass into provider
//router gives app and andy child of app access to ruote and setting up links -->
ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>

ReadingListContainer.js
<!-- Switch in will choose first route that matches that path; 
the order of the routes matters-->


BooksContainer.js
<!-- if this.props.reading_list exists, then render this.props.reading_list.books. otherwise this.props.reading_list comes up as undefined the first time it's rednered and you can't call .books on undefined -->
 render() {
        return (
            <div>
                <BookInput/>
                <Books books={this.props.reading_list && this.props.reading_list.books}/>
            </div>
        )
    }

    Books.js
    const Books = (props) => {
    return (
        <div>
  <!-- if props.books is not undefined, then iterate and print this list -->           {props.books && props.books.map(book =>
                <p key={book.id}>{book.title} <br/>
                By {book.author} <br/> 
                Summary: {book.summary} <br/>
                Comments: {book.comments} <br/></p>
            )}
        </div>
    )