import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/LocalStorage";


const ReadBooks = () => {
    const books = useLoaderData();

    useEffect(() => {
        const storedReadBooks = getStoredReadBook();
         if (books.length > 0) {
            const BooksReaded = books.filter((book) =>
            storedReadBooks.includes(book.bookId));
            console.log(BooksReaded)
            
           }
    }, [])
    return (
        <div className="mt-10">
            <h2>this is read book route</h2>
        </div>
    );
};

export default ReadBooks;