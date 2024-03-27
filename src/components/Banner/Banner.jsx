import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row border rounded-2xl bg-gray-200 gap-10 mt-10">
           
            <div className="text-center flex flex-col justify-center gap-6  w-full lg:w-2/3">
                <h1 className="text-6xl font-bold text-black pt-10 lg:pt-0">Books to freshen up your bookshelf</h1>
                <Link to="/list">
                <button className="btn mt-3 bg-lime-500 text-white w-36 ml-56 lg:ml-36">View The List</button>
                </Link>
            </div>
            <div className="p-6 lg:p-16  w-full lg:w-1/3">
               
                <img src="https://i.ibb.co/nsmKyqS/waves-in-an-sea.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;