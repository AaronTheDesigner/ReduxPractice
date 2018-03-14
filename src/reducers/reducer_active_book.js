export default function(state = null, action) {
    //state argument is NOT application state
    //only the sate this reducer is responsible for
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}