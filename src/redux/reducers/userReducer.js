import { ActionTypes } from "../constants/action-types";

const initialState = {
    // user: {
    //     firstName: "Claudio",
    //     lastName: "De Bernardi",
    //     country: "Italy",
    //     image: ""
    // }
    user: [],
    loaded: false
}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER: 
            return {
                ...state,
                user: payload,
                loaded: true
            };
        default:
            return state 
    }
}