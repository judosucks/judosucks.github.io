import {useState} from "react";
import BookEdit from './BookEdit'

function BookShow({book, onDelete, onEdit}) {
    const [showEdit,
        setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
        console.log(showEdit)
    }
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
        console.log(newTitle, showEdit)

    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
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