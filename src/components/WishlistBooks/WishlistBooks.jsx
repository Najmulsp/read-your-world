import PropTypes from "prop-types";

const WishlistBooks = ({book}) => {

    const {image, bookName, author} = book;
    return (
        <div>
            


      
            <h2 className="border border-b-0 mt-10">Wishlist Books</h2>


          {/* this is card section  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl"          />
                    <div>
                        <h1 className="text-5xl font-bold">{book.bookName}</h1>
                        <p className="py-6">{book.author} </p> 
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
    

        </div>
    );
};


WishlistBooks.propTypes = {
    book: PropTypes.array,
  };
export default WishlistBooks;