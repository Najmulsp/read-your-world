import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistedBook } from "../../Utility/LocalStorage";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  const books = useLoaderData();

  const [wishlistedBooks, setWishlistedBooks] = useState([]);
  const [shortDiscending, setShortDiscending] =useState([]);

  const handleBooksFilter = filter =>{
    if(filter === 'all'){
      setShortDiscending(BooksWishlisted);
    }
    else if(filter === 'classic'){
      const classicBooks = BooksWishlisted.filter( book => book.category === 'Classic');
      setShortDiscending(classicBooks);
    }
    else if(filter === 'fiction'){
      const fictionBooks = BooksWishlisted.filter( book => book.category === 'Fiction');
      setShortDiscending(fictionBooks);
    }
  }

  useEffect(() => {
    const storedBookIds = getStoredWishlistedBook();
    if (books.length > 0) {
      const BooksWishlisted = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
       console.log(BooksWishlisted);
      setWishlistedBooks(BooksWishlisted);
      setShortDiscending(BooksWishlisted);
    }
  }, [books]);


  // const [image, bookName, author]  = wishlistedBooks;

  return (
    <div>
      <h2 className="bg-red-50 py-6 rounded-xl text-4xl text-black font-bold text-center ">
        Listed Books route: {wishlistedBooks.length}
      </h2>
      <div className=" w-full text-center ">
                <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn bg-lime-500 text-white mt-6 px-6">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('all')}><a>Short By</a></li>
                        <li onClick={() => handleBooksFilter('classic')}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('fiction')}><a>Number of Pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </div> 
            </div>
            <div className="border border-b-0 mt-10 flex gap-10">
            <h2 className="">Read Books</h2>
            <h2 className="">Wishlist Books</h2>
            </div>

      {
        shortDiscending.map(book => <WishlistBooks
           key={book.bookId}
           book = {book}
           ></WishlistBooks>)
      }
    </div>
      


      
  );
};

export default ListedBooks;
