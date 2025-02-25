
import {FETCH_QUOTES_FAILURE,FETCH_QUOTES_REQUEST,FETCH_QUOTES_SUCCESS} from '../actions/quoteActions'

const initialState = {
    loading: false,
    quotes: [],
    error: '',
};

function quoteReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUOTES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_QUOTES_SUCCESS:
            return {
                loading: false,
                quotes: action.payload.quotes,
                error: '',
            };
        case FETCH_QUOTES_FAILURE:
            return {
                loading: false,
                quotes: [],
                error: action.payload,
            };
        default:
            return state;
    }
}

export default quoteReducer;