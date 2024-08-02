import {useState} from "react";

function BookEdit({book, onSubmit}) {
    const [title,
        setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id,title)
        
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