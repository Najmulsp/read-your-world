

const Banner = () => {
    return (
        <div className="container flex flex-col lg:flex-row border rounded-2xl bg-gray-200 gap-10 mt-10">
           
            <div className="text-center flex flex-col justify-center gap-6  w-2/3">
                <h1 className="text-6xl font-bold text-black">Books to freshen up your bookshelf</h1>
                <button className="btn mt-3 bg-lime-500 text-white w-36 ml-36">View The List</button>
            </div>
            <div className=" p-16 w-1/3">
                <img src="https://i.ibb.co/h8Sx3qz/pngwing-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;