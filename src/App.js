import 'bulma/css/bulma.css';
import {useEffect, useContext, useState} from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";
import BooksContext from './provider/booksContext';
import './App.css'
function App() {

    const {fetchBooks} = useContext(BooksContext)

    useEffect(() => {

        fetchBooks()
    }, [fetchBooks])

    return (
        <div className='hero is-large is-danger'>
            <h1 className="title">Reading List</h1>

            <BookList/>
            <BookCreate/>
        </div>

    );
}
export default App;