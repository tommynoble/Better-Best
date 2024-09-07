import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'; // Ensure correct path to your Firebase setup
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "your-collection-name"));
        const items = querySnapshot.docs.map(doc => doc.data());
        setData(items);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Assuming your data has a 'name' field
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
