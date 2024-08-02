import 'bulma/css/bulma.css';
import {useState, useEffect} from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";
import axios from 'axios';

function App() {
    const [books,
        setBooks] = useState([]);

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async() => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    const createBook = async(title) => {
        const response = await axios.post('http://localhost:3001/books', {title})
        console.log(response)
        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
        // const updatedBooks = [     ...books, {         id: Math.round(Math.random() *
        // 9999),         title     } ]; setBooks(updatedBooks);
    };
    const editBookById = async(id, newTitle) => {
  const response = await axios.put(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data
                };
            }
            return book;
        })
        setBooks(updatedBooks)
    }

    const deleteBookById = async(id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        // const updatedBooks = books.filter((book) => {     return book.id !== id; })
        // console.log('delete')
        setBooks(updatedBooks);
    }

    return (
        <div className='hero is-large is-danger'>
            <h1 className="title">Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>

    );
}
export default App;