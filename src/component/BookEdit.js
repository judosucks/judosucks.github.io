import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";
function BookEdit({book, onSubmit}) {
    const [title,
        setTitle] = useState(book.title);

    const {editBookById} = useBooksContext()
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit()
        editBookById(book.id, title)
        console.log(book.id,title)
    }
    return (
        <form className="field" onSubmit={handleSubmit}>
            <div className="control">
                <label className="label">Title</label>

                <input className="input is-small m-1" value={title} onChange={handleChange}/>
                <button className="button is-primary is-outlined is-small m-1">Save</button>
            </div>
        </form>
    );
}
export default BookEdit;