import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/LocalStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const PagesToRead = () => {
  const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

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
      <h2>Pages To Read route</h2>
       <BarChart
        width={500}
        height={300}
          data={readBooks} 
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="bookName" />  
        <YAxis />
        
        <Tooltip></Tooltip>
        
        <Bar
        //   dataKey="uv"  here the value which I want to show
          fill="#8884d8"
          //  shape={<TriangleBar />}
          
          label={{ position: "top" }}
        >
          {readBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart> 
    </div>
  );
};

export default PagesToRead;
