import {useState} from "react";

function BookEdit({book, onSubmit}) {
    const [title,
        setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
        console.log(book.id, title);
    }
    return (
        <form className="field is-link" onSubmit={handleSubmit}>
            <div className="control">
                <label className="label">Title</label>

                <input className="input is-small" value={title} onChange={handleChange}/>
                <button className="button is-primary is-outlined m-1">Save</button>
            </div>
        </form>
    );
}
export default BookEdit;