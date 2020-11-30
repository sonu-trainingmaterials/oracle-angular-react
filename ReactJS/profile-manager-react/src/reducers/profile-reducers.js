//import profiles from '../data/inmemory-data';
import * as actionTypes from '../actions/action-types';

const initialState = {
    items: [],
    searchText: "",
    profile: undefined,
    results:[]
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROFILES:
            //return { ...state, items:state.items.concat(action.profiles) }; //return a new state object
            return { ...state, items:[...action.profiles]}
        case actionTypes.GET_PROFILE:
            return {
                ...state,
                profile: state.items.find(p => p.id === action.id)
            };
        case actionTypes.ADD_PROFILE:
            return {
                ...state,
                items: state.items.concat(action.profile)
            }
        case actionTypes.DELETE_PROFILE:
            let itemIndex = state.items.findIndex(p => p.id === action.id);
            return {
                ...state,
                items: state.items.splice(itemIndex, 1)
            }
        case actionTypes.SEARCH_PROFILE:
            const { text } = action;
            if (text) {
                let searchResult = state.items.filter(p => p.name.toUpperCase().indexOf(action.text.toUpperCase()) >= 0);
                return { ...state, searchText: text, results: searchResult }
            }
            else {
                return { ...state, searchText: text }
            }
        default:
            return state;


    }
}

export default profileReducer;