import { SEARCH_USERS, GET_USERS, CLEAR_USERS, GET_REPOS, SET_LOADING } from "../types";

const GithubReducer = (state, action) => {
    switch(action.payload){
        case SEARCH_USERS:
            return{ ...state,
                users: action.payload,
                loading: false
            };
        case GET_USERS:
            return{ ...state,
                users: action.payload,
                loading: false
            };
         case CLEAR_USERS:
            return{ ...state,
                users: [],
                loading: false
            };
        case GET_REPOS:
            return{...state,
                repos: action.payload,
                loading: false
            };
        case SET_LOADING:
            return{ ...state, loading: true};
        default:
            return state;
        
    }

}

export default GithubReducer;