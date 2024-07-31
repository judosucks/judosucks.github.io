import {useState} from "react";

function BookShow({book, onDelete}) {

    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    return (
        <div className="cell">
            <section className="section">
                <p>{book.title}</p>

                <button className="button" onClick={handleDeleteClick}>Delete</button>
            </section>
        </div>
    )
}
export default BookShow