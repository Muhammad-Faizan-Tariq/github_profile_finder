import { SEARCH_USERS, GET_USERS, CLEAR_USERS, GET_REPOS, SET_LOADING } from "../types";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { useReducer } from "react";
import axios from "axios";

let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}


const GithubState = props => {
    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data
        })
    };

    const getUsers = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    };

    const getUsersRepos = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    };

    const clearUsers = () => dispatch({type: CLEAR_USERS});

    const setLoading = () => dispatch({type: SET_LOADING});

    return(
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUsers,
                getUsersRepos
                }}>
                {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState