import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

export class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
//anything retuned from the following function will end up as props on the Booklist container.
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside book list
    return {
        books: state.books
    };
}

function mapDispatchToPros(dispatch) {
    //whenever selct book is called - result passed to all reducers.
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote booklist from a component to a container - must know about this new dispatch method, selectbook.
//makes it available as a prop
export default connect(mapStateToProps, mapDispatchToPros)(BookList);