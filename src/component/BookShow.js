import {useState} from "react";
import BookEdit from './BookEdit'
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}) {
    const {deleteBookById} = useBooksContext()

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

    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
        console.log("where")
    }
    return (
        <div className="columns is-3">
            
            <img src={`https://picsum.photos/seed/${book.id}/300/200`}/>
           
            <section className="column is-info">
                <div className="bd-notification is-primary">
                {content}
                </div>
                <button
                    className="button is-pulled-right is-small is-outlined m-1"
                    onClick={handleEditClick}>Edit</button>
                <button
                    className="delete is-small is-pulled-right m-1"
                    onClick={handleDeleteClick}>
                   
                </button>
            </section>
        </div>
    )
}
export default BookShow