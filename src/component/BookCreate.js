import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";
function BookCreate() {
    
    const {createBook} = useBooksContext()
    
    const [title,
        setTitle] = useState('');

    const handleChange = (event) => {

        setTitle(event.target.value);

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return <div className="control">

        <h3>Add a book</h3>

        <form className="filed is-primary" onSubmit={handleSubmit}>
            <label className="label">Title</label>
            <input
                placeholder="enter books here"
                className="input is-small is-primary m-1"
                value={title}
                onChange={handleChange}/>
            <button className="button is-success is-outlined m-1">
                Create!
            </button>
        </form>
    </div>;
}
export default BookCreate;