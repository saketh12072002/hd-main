import designersTypes from "./designers.types"

const INITIAL_STATE = {
    designers: [],
    designer:{},
}

const designersReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {

        case designersTypes.SET_DESIGNERS:
            return {
                ...state,
                designers:action.payload
            }

        case designersTypes.SET_DESIGNER:
            return{
                ...state,
                designer:action.payload
            }
        default:
            return state;
    }
}

export default designersReducer;