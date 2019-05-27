import {checkAuthenticationData} from "../helpers/actions";

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export function logIn(username: string, password: string) {
    if (checkAuthenticationData(username, password)) {
        return {
            type: LOG_IN
        };
    } else {
        return{
            type: LOG_IN_FAIL,
        }
    }
}

export function logOut() {
    return {
        type: LOG_OUT,
    }
}