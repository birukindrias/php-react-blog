import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from './store/AuthSlice';
let api = 'http://localhost:8080/api/v1/';
import { fetchStart, fetchSuccess, fetchFailure, createStart, createFailure } from './store/resourceSlice.jsx';
import { searchResult } from './store/UserSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';
// import {
//     createStart,
//     createSuccess,
//         createFailure,
// } from "./store/resourceSlice";


export const fetchItems = () => async (dispatch) => {
    dispatch(fetchStart());

    try {
        const response = await axios.get(api + 'posts');
        dispatch(fetchSuccess(response.data.posts));
    } catch (error) {
        dispatch(fetchFailure(error.message));
    }
};
export const post = ({ post, user_id }) => async (dispatch) => {
    dispatch(createStart());
    try {

        const response = await axios.post(
            api + "createpost",
            { post, user_id }
        );
        console.log(response);
        console.log(response.data.data);

        dispatch(createSuccess(response.data.data));
    } catch (error) {
        dispatch(createFailure(error.message));
    }
};
export const searchUser = ({ search_user: search_user }) => async (dispatch) => {
    try {
        if (search_user != "") {
            console.log(search_user);
            console.log('search_user');
            const response = await axios.post("http://localhost:8080/api/v1/search", {
                 search_user: search_user 
            });

            console.log(response.data.data.users);
            if (response.data.data.users) {
                dispatch(searchResult(response.data.data.users));
                return
            }
            console.log(response.data.data.users);

        }
    } catch (error) {
        dispatch(createFailure(error.message));

    }
};
export const login = (email, password) => async (dispatch) => {
    dispatch(loginStart());

    try {
        const response = await axios.post(api + 'login', { email, password });
        const { user, token } = response.data.data;
        dispatch(loginSuccess({ user, token }));
        localStorage.setItem('token', token);
        localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const Signup = (username, email, password) => async (dispatch) => {
    dispatch(loginStart());

    try {

        const response = await axios.post(api + 'register', { username, email, password });
        const { user, token } = response.data.data;
        dispatch(loginSuccess({ user, token }));
        localStorage.setItem('token', token);
        localStorage.setItem("user", JSON.stringify(user));
        return true
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
export const update = (formValues) => async (dispatch) => {
    dispatch(loginStart());

    try {

        const response = await axios.post(
            "http://localhost:8080/api/v1/update",
            formValues,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        // saveUser(response.data.data);
        const { user, token } = response.data.data;
        dispatch(loginSuccess({ user, token }));
        localStorage.setItem('token', token);
        localStorage.setItem("user", JSON.stringify(user));
        return true
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
