import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistedBook } from "../../Utility/LocalStorage";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  const books = useLoaderData();

  const [wishlistedBooks, setWishlistedBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredWishlistedBook();
    if (books.length > 0) {
      const BooksWishlisted = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
       console.log(BooksWishlisted);
      setWishlistedBooks(BooksWishlisted);
    }
  }, []);


  const [image, bookName, author]  = wishlistedBooks;

  return (
    <div>
      <h2 className="bg-red-50 py-6 rounded-xl text-4xl text-black font-bold text-center ">
        Listed Books route: {wishlistedBooks.length}
      </h2>
      <div className=" w-full text-center ">
                <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn bg-lime-500 text-white mt-6 px-6">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Short By</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </div> 
            </div>

      {
        wishlistedBooks.map(book => <WishlistBooks
           key={book.bookId}
           book = {book}
           ></WishlistBooks>)
      }
    </div>
      


      
  );
};

export default ListedBooks;
