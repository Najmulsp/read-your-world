
import PropTypes from "prop-types";

const ReadBooks = ({book}) => {
  
        const { yearOfPublishing, publisher, category, rating, tags, image, author, bookName}  = book;
        
    
    
    return (
        <div className="mt-10">

            {/* this is card section */}
                <div className="hero  bg-base-200 ">
                <div className="hero-content  flex-col lg:flex-row gap-16">
                 <img src={image} className="max-w-sm rounded-lg shadow-2xl h-96"  /> 
                    <div>
                         <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">By: {author} </p> 
                        <h1 className="text-left space-x-8 mb-4">
                  <span className="font-bold ">Tags</span>
              <span className="bg-red-50 p-2 rounded-3xl text-lime-600 font-semibold">{tags[0]}</span>
              <span className="bg-red-50 p-2 rounded-3xl text-lime-600 font-semibold">{tags[1]}</span>

                <div className="flex flex-col lg:flex-row gap-12 lg:mt-6">
                    <div className="flex gap-4 ">
                     <p className="">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 9C16.5 16.142 9 20.25 9 20.25C9 20.25 1.5 16.142 1.5 9C1.5 7.                        01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C10.9891 1.                        5 12.8968 2.29018 14.3033 3.6967C15.7098 5.10322 16.5 7.01088 16.5 9Z"                      stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </p>
                     <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-4 ">
                     <p className="">
                     <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 17.128C14.853 17.3757 15.7368 17.5009 16.625 17.5C18.0534 17.5021 19.4633 17.1764 20.746 16.548C20.7839 15.6517 20.5286 14.7675 20.0188 14.0293C19.509 13.2912 18.7724 12.7394 17.9207 12.4575C17.0691 12.1757 16.1487 12.1791 15.2992 12.4674C14.4497 12.7557 13.7173 13.313 13.213 14.055M14 17.128V17.125C14 16.012 13.714 14.965 13.213 14.055M14 17.128V17.234C12.0755 18.3931 9.87064 19.0038 7.62402 19C5.29302 19 3.11202 18.355 1.25002 17.234L1.24902 17.125C1.24826 15.7095 1.71864 14.3339 2.58601 13.2153C3.45338 12.0966 4.6684 11.2984 6.03951 10.9466C7.41063 10.5948 8.85985 10.7093 10.1587 11.2721C11.4575 11.8349 12.5321 12.814 13.213 14.055M11 4.375C11 5.27011 10.6444 6.12855 10.0115 6.76149C9.37857 7.39442 8.52013 7.75 7.62502 7.75C6.72992 7.75 5.87147 7.39442 5.23854 6.76149C4.6056 6.12855 4.25002 5.27011 4.25002 4.375C4.25002 3.47989 4.6056 2.62145 5.23854 1.98851C5.87147 1.35558 6.72992 1 7.62502 1C8.52013 1 9.37857 1.35558 10.0115 1.98851C10.6444 2.62145 11 3.47989 11 4.375ZM19.25 6.625C19.25 7.32119 18.9735 7.98887 18.4812 8.48116C17.9889 8.97344 17.3212 9.25 16.625 9.25C15.9288 9.25 15.2612 8.97344 14.7689 8.48116C14.2766 7.98887 14 7.32119 14 6.625C14 5.92881 14.2766 5.26113 14.7689 4.76884C15.2612 4.27656 15.9288 4 16.625 4C17.3212 4 17.9889 4.27656 18.4812 4.76884C18.9735 5.26113 19.25 5.92881 19.25 6.625Z" stroke="#131313" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                     </p>
                     <p>Publisher: {publisher}</p>
                    </div>
                </div>
              <span >
              
              </span>
              <span></span>

              <p>
                <span className="text-white"></span>
                <span></span>
              </p>
                </h1>        
                        <div className="flex gap-3 lg:gap-10 mt-4">
                            <button className="btn bg-cyan-100 rounded-3xl text-cyan-800 ">Category: {category}</button>
                            <button className="btn bg-rose-100 rounded-3xl text-red-800">Rating: {rating}</button>
                            <button className="btn bg-lime-500 rounded-3xl text-white">View Details</button>
                        </div>


                    </div>
                </div>
            </div>   
        </div>
    );
};
ReadBooks.propTypes = {
    book: PropTypes.object,
  };
export default ReadBooks;