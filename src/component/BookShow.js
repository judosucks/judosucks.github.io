import {useState} from "react";
import BookEdit from './BookEdit'
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}) {
    const {deleteBookById,editBookById} = useBooksContext()
   
    const [showEdit,
        setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
       
    }
    const handleSubmit = () => {
        setShowEdit(false)
        editBookById(book.id)
        console.log("edit",book.id)
        

    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
        console.log("where")
    }
    return (
        <div className="cell">
            <img alt="image" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <section className="section">
                {content}
                <button className="button is-small is-outlined m-1" onClick={handleEditClick}>Edit</button>
                <button className="button is-small is-outlined m-1" onClick={handleDeleteClick}>Delete</button>
            </section>
        </div>
    )
}
export default BookShow