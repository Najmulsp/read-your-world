import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';


const getStoredWishlistedBook = () =>{
    const storedWishlistedBook = localStorage.getItem('wishlisted-book');

    if(storedWishlistedBook){
        return JSON.parse(storedWishlistedBook);
    }
    return [];
}


const saveWishlistedBook = bookId =>{
    const storedWishlistedBooks = getStoredWishlistedBook();
    const exists = storedWishlistedBooks.find(book => book == bookId)
    if(!exists){
        storedWishlistedBooks.push(bookId);
        localStorage.setItem('wishlisted-book', JSON.stringify(storedWishlistedBooks))
        return toast("Books Added to wishlist");
    }
    return toast.error("You have already added this book!");
}

export {saveWishlistedBook, getStoredWishlistedBook}



// read books storing
const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('Read-book');

    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}


const saveReadBook = bookId =>{
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(book => book == bookId)
    if(!exists){
        storedReadBooks.push(bookId);
        localStorage.setItem('Read-book', JSON.stringify(storedReadBooks))
        return toast("Books Added to Read List");
       
    }
    
    return toast.error("You have already read this book!");

    // <ToastContainer />
}

export {saveReadBook, getStoredReadBook}