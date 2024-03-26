import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const book = books.find(book => book.bookId == bookId)
    const {bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} =book;
    return (
        <div className="container mx-auto flex flex-col lg:flex-row border rounded-2xl bg-gray-200 lg:gap-10 mt-10">
           <div className="ml-20 lg:ml-0  p-16 w-4/5 lg:w-1/3">
                <img src="https://i.ibb.co/h8Sx3qz/pngwing-1.jpg" alt="" />
            </div>
            <div className="text-left flex flex-col justify-center gap-6 mx-auto lg:w-2/3 w-4/5 py-10">
                <h1 className="text-6xl font-bold text-black pt-10 lg:pt-0">{bookName}</h1>
                <p className="text-2xl text-black pt-10 lg:pt-0">By: {author}</p>
                <hr />
                <p className=" text-black">{category}</p>
                <hr />
                <p><span className="font-bold text-black">Review:</span>{review}</p>
                <h1 className="text-left space-x-8 ">
              <span className="bg-red-50 p-2 rounded-3xl text-lime-600 font-semibold">{tags[0]}</span>
              <span className="bg-red-50 p-2 rounded-3xl text-lime-600 font-semibold">{tags[1]}</span>
                </h1>
                <hr />
                <p className="text-left ">Number of Pages: <span className="font-bold ml-16"> {totalPages}</span></p>
                <p className="text-left ">Publisher: <span className="font-bold ml-32"> {publisher}</span></p>
                <p className="text-left ">Year of Publishing: <span className="font-bold ml-16"> {yearOfPublishing}</span></p>
                <p className="text-left ">Rating: <span className="font-bold ml-36"> {rating}</span></p>
                <div className="flex  gap-6 text-left">
                <button className="btn btn-outline btn-info  border border-black mt-3  text-black w-36 ml-56 lg:ml-36">Read</button>
                <button className="btn mt-3 bg-cyan-500 text-white w-36 ml-56 lg:ml-36">Wishlist</button>

                </div>
            </div>
        
    </div>
    );
};

export default BookDetails;