import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/prices")
      .then((res) => setData(res.data));
    axios
      .get("http://127.0.0.1:5000/api/events")
      .then((res) => setEvents(res.data));
  }, []);

  return (
    <div style={{ width: "100%", height: "500px", padding: "20px" }}>
      <h1>Brent Oil Price Analysis</h1>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Price" stroke="#8884d8" dot={false} />
          {events.map((e, i) => (
            <ReferenceLine key={i} x={e.Date} stroke="red" label={e.Category} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default App;
