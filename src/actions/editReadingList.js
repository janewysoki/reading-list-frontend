
export const editReadingList = (data) => {
     return (dispatch) => {
         fetch(`http://localhost:3000/api/v1/reading_lists/${data.id}`, {
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             method: 'PATCH',
             body: JSON.stringify(data)
         })
         .then(response => response.json())
         .then(reading_list => {
             if (reading_list.error) {
                 alert(reading_list.error)
             } else {
                 dispatch({type: 'EDIT_READING_LIST', payload: reading_list})
             }
         })
     }
 }
 
 