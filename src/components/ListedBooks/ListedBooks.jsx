import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistedBook } from "../../Utility/LocalStorage";
import { getStoredReadBook } from "../../Utility/LocalStorage";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import ReadBooks from "../ReadBooks/ReadBooks";
// import { Link } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();

  const [wishlistedBooks, setWishlistedBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  // const [shortDiscending, setShortDiscending] = useState([]);
  

  // const handleBooksFilter = (filter) => {
  //   if (filter === "all") {
  //     setShortDiscending(BooksWishlisted);
  //   } else if (filter === "classic") {
  //     const classicBooks = BooksWishlisted.filter(
  //       (book) => book.category === "Classic"
  //     );
  //     setShortDiscending(classicBooks);
  //   } else if (filter === "fiction") {
  //     const fictionBooks = BooksWishlisted.filter(
  //       (book) => book.category === "Fiction"
  //     );
  //     setShortDiscending(fictionBooks);
  //   }
  // };


  
  // for wishList books
  useEffect(() => {
    const storedBookIds = getStoredWishlistedBook();
    if (books.length > 0) {
      const BooksWishlisted = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      
      setWishlistedBooks(BooksWishlisted);
      // setShortDiscending(BooksWishlisted);
    }
  }, [books]);

  // for read books
  useEffect(() => {
    const storedReadBooks = getStoredReadBook();
    if (books.length > 0) {
      const BooksReaded = books.filter((book) =>
        storedReadBooks.includes(book.bookId)
      );
      
      setReadBooks(BooksReaded);
    }
  }, [books]);

  return (
    <div>
      <h2 className="bg-red-50 py-6 rounded-xl text-4xl text-black font-bold text-center ">
        Listed Books route: {wishlistedBooks.length}
      </h2>
      {/* <div className=" w-full text-center ">
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
      </div> */}

      {/* tab from mamba ui  */}
      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
         defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {/* for my books */}
        {readBooks.map((book) => (
        <ReadBooks key={book.bookId} book={book}></ReadBooks>
      ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
         {wishlistedBooks.map((book) => (
        <WishlistBooks key={book.bookId} book={book}></WishlistBooks>
      ))}
        </div>

       
      </div>

      {/* <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center  flex-nowrap  dark:text-gray-800 mt-10">
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
        
      </div> */}
      {/* <Outlet></Outlet> */}

      
       
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
