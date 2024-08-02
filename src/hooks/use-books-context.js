import { useContext } from "react";
import BooksContext from "../provider/booksContext";

function useBooksContext(){
    return useContext(BooksContext)
}
export default useBooksContext