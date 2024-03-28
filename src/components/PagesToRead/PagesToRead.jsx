
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const PagesToRead = () => {
  return (
    <div>
      <h2>Pages To Read route</h2>
      <BarChart
        width={500}
        height={300}
        // data={data}     data will be my data
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" />  
        <YAxis />
        
        <Tooltip></Tooltip>
        */}
        <Bar
        //   dataKey="uv"  here the value which I want to show
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
