import 'bulma/css/bulma.css';
import {useState} from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
    const [books,
        setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    title: newTitle
                };
            }
            return book;
        })
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const createBook = (title) => {
        const updatedBooks = [
            ...books, {
                id: Math.round(Math.random() * 9999),
                title
            }
        ];
        setBooks(updatedBooks);
    };

    return (
        <div className='hero is-large is-danger'>
           <h1 className="title">Reading List</h1>
                    <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
                    <BookCreate onCreate={createBook}/>
                </div>

           
    );
}
export default App;