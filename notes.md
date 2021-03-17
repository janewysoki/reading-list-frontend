componentDidMount() {
  fetch('http://localhost:3000/api/v1/reading_lists/1') //async get request (default fetch request is get) - won't do anything with data till we get response back
  .then(response => response.json()) //turn response into json
  .then (data => console.log(data)) //the response that we get turned into json becomes data here (could still call it response)
 //the return value of previous then comes in as argument in next one (i.e. response.json becomes data in second .then)
}

componentDidMount() {
  fetch('http://localhost:3000/api/v1/reading_lists') 
  .then(response => response.json()) 
  .then (data => console.log(data)) 
}



#first checks serializers before models. serializer knows when you render json to first check serializer to send to frontend?