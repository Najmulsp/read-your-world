import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/LocalStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




const PagesToRead = () => {
  const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

   const [totalPages, bookName] = readBooks;

    useEffect(() => {
      const storedReadBooks = getStoredReadBook();
      if (books.length > 0) {
        const BooksReaded = books.filter((book) =>
          storedReadBooks.includes(book.bookId)
        );
        
        setReadBooks(BooksReaded);
      }
    }, [books]);



    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
  return (
    <div className=" bg-rose-50 rounded-2xl mt-10 flex justify-center py-12">
      
       <BarChart
        width={1200}
        height={600}
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
           dataKey="totalPages" 
          fill="#8884d8"
          shape={<TriangleBar />}
          
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

PagesToRead.propTypes = {
  props: PropTypes.object,
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default PagesToRead;
