import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import getNewData from './utils/generateSum';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = React.useState('A');

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    loadData(category);
  }, [category]);

  const loadData = async (cat) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3004/type/${cat}`);
    setData(getNewData(res.data));
    setLoading(false);
  };

  return (
    <div style={styles.heading}>
      <h1>React Charts s + Nodejs</h1>
      <span style={styles.text}>Select Type : </span>
      <select
        style={{ width: '100px' }}
        name="category"
        value={category}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <option id="0">A</option>
        <option id="1">B</option>
        <option id="2">C</option>
        <option id="3">D</option>
        <option id="4">E</option>
      </select>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <BarChart
          width={1024}
          height={500}
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis type="number" domain={[0, 8000]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="#52FFB8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      )}
    </div>
  );
}

const styles = {
  heading: {
    position: 'absolute',
    top: '80px',
    left: '20%',
  },
  text: {
    fontSize: 22,
  },
};

export default App;
