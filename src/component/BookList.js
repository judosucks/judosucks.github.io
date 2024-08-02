import BookShow from "./BookShow";
import BooksContext from "../provider/booksContext";
import { useContext } from "react";
function BookList({books,onDelete,onEdit}){
    const {count,incrementCount} = useContext(BooksContext)

    const renderedBooks = books.map((book)=>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
    })
    return <div className="grid">
        {count}
        <button className="button" onClick={incrementCount}>click</button>
        {renderedBooks}</div>;
}
export default BookList;