import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { getStoredWishlistedBook } from "../../Utility/LocalStorage";
// import WishlistBooks from "../WishlistBooks/WishlistBooks";
//  import ReadBooks from "../ReadBooks/ReadBooks";
import { Link } from "react-router-dom";
const ListedBooks = () => {
  const books = useLoaderData();

  const [wishlistedBooks, setWishlistedBooks] = useState([]);
  // const [shortDiscending, setShortDiscending] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleBooksFilter = (filter) => {
    if (filter === "all") {
      setShortDiscending(BooksWishlisted);
    } else if (filter === "classic") {
      const classicBooks = BooksWishlisted.filter(
        (book) => book.category === "Classic"
      );
      setShortDiscending(classicBooks);
    } else if (filter === "fiction") {
      const fictionBooks = BooksWishlisted.filter(
        (book) => book.category === "Fiction"
      );
      setShortDiscending(fictionBooks);
    }
  };

  useEffect(() => {
    const storedBookIds = getStoredWishlistedBook();
    if (books.length > 0) {
      const BooksWishlisted = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      // console.log(BooksWishlisted);
      setWishlistedBooks(BooksWishlisted);
      // setShortDiscending(BooksWishlisted);
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
          <div
            tabIndex={0}
            role="button"
            className="btn bg-lime-500 text-white mt-6 px-6"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleBooksFilter("all")}>
              <a>Short By</a>
            </li>
            <li onClick={() => handleBooksFilter("classic")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBooksFilter("fiction")}>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>

      {/* tab from mamba ui  */}
      

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center  flex-nowrap  dark:text-gray-800 mt-10">
        <Link
          onClick={() => setTabIndex(0)}
          to=''
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}  dark:border-gray-600 dark:text-gray-600`}
        >
        <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTabIndex(1)}
          to={`wishlist`}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}  dark:border-gray-600 dark:text-gray-600`}
        >
        <span>Wishlist Books</span>
        </Link>
        
      </div>
      <Outlet></Outlet>
      

      {/* {shortDiscending.map((book) => (
        <WishlistBooks key={book.bookId} book={book}></WishlistBooks>
      ))} */}
      {/* {
        shortDiscending.map(book => <ReadBooks
          key={book.bookId}
          book = {book}
          ></ReadBooks>)
      } */}


      
    </div>
  );
};

export default ListedBooks;
