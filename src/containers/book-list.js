import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        })
    }


    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Returned from here will show up as props
    return{
        books: state.books
    };
}

//Anything returned from this func will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //When selectBook is called, the result should be passed to 
    //all reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promote BookList from component to a container - it needs to
//know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);