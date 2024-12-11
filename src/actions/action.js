import axios from 'axios';


const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});


const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
});


export const fetchData = () => async (dispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};
