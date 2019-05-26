import { loadState, saveState } from './localStorage';
import {createStore} from "redux";

const initialState = loadState();

function reducer(state = initialState, action: any) {

    if(action.type === 'LOG_IN') {

        return {
            is_authorized: true
        }
    }

    if (action.type === 'LOG_OUT') {

        return {
            is_authorized: false
        }
    }

    if (action.type === 'LOG_IN_FAIL') {

        return {
            is_authorized: false,
            error: true,
        }
    }

    return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    saveState({
        is_authorized: store.getState().is_authorized
    })
});

export default store;


