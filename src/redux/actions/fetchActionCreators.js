import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actionTypes"


export const fetchDataRequest = () => {
    return ({
        type: FETCH_DATA_REQUEST
    })
}

export const fetchDataSuccess = (data) => {
    return ({
        type: FETCH_DATA_SUCCESS,
        payload: data
    })
}

export const fetchDataFailure = (error) => {
    return({
        type: FETCH_DATA_FAILURE,
        payload: error
    })
}


export const fetchData =  (dispatch) => {

    return (async function(){
        try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const items = await response.json();
      dispatch(fetchDataSuccess(items));
        }
        catch(error){
            dispatch(fetchDataFailure(error.message));
        }
    })();
    
}