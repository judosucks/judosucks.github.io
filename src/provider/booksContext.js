import {createContext, useState , useCallback} from "react";
import axios from "axios";

const BooksContext = createContext()
function Provider({children}) {
   
    const [books,
        setBooks] = useState([]);

    const fetchBooks = useCallback(async() => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    },[])

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
    const editBookById = async(id,newTitle) => {
        // eslint-disable-next-line no-undef
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title:newTitle})
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
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        // const updatedBooks = books.filter((book) => {     return book.id !== id; })
        // console.log('delete')
        setBooks(updatedBooks);
    }
    
    const valueToShare = {
        books:books,
        deleteBookById,
        createBook,
        editBookById,
        fetchBooks
    }
    
    return (
        <BooksContext.Provider value={valueToShare}>

            {children}
        </BooksContext.Provider>
    )
}
export {Provider}
export default BooksContext