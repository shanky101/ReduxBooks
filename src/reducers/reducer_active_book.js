//State argument is not application state but of the 
//state this reducer is handling

export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}