export function selectBook(book) {
    //select book is an action creator
    //returns and action
    //an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}