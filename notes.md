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