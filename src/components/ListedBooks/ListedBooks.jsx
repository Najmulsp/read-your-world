import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistedBook } from "../../Utility/LocalStorage";
import { getStoredReadBook } from "../../Utility/LocalStorage";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import ReadBooks from "../ReadBooks/ReadBooks";


const ListedBooks = () => {
  const books = useLoaderData();
  const [shortRead, setShortRead] = useState([]);
  const [shortWhishList, setShortWishList] = useState([]);

   const [wishlistedBooks, setWishlistedBooks] = useState([]);
   const [readBooks, setReadBooks] = useState([]);

console.log(shortWhishList)

    const handleRating = () =>{
      const newReadList = shortRead.sort((a,b)=> a.rating>b.rating? -1 : 1);
      const newWishList = shortWhishList.sort((a,b)=> a.rating>b.rating? -1 : 1);
      
      setShortRead(newReadList)
      setShortWishList(newWishList)

      console.log(newWishList)
    }
    const handlePages = () =>{
      const newReadList = shortRead.sort((a,b)=> a.totalPages>b.totalPages? -1 : 1);
      const newWishList = shortWhishList.sort((a,b)=> a.totalPages>b.totalPages? -1 : 1);
      
      setShortRead(newReadList)
      setShortWishList(newWishList)

      console.log(newWishList)
    }

  
  // for wishList books
  useEffect(() => {
    const storedBookIds = getStoredWishlistedBook();
    if (books.length > 0) {
      const BooksWishlisted = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      
       setWishlistedBooks(BooksWishlisted);
      setShortWishList(BooksWishlisted);
      
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
      setShortRead(BooksReaded);
    }
  }, [books]);

  return (
    <div>
      <h2 className="bg-red-50 py-6 rounded-xl text-4xl text-black font-bold text-center "> Books </h2>
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
            
            <li onClick={() => handleRating()}>
              <a>Rating</a>
            </li>
            <li onClick={() => handlePages()}>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div> 

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
        {shortRead.map((book) => (
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
         {shortWhishList.map((book) => (
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
