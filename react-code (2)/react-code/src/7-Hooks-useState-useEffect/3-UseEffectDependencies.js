import React, { useState, useEffect } from "react";

const UseEffectDependencies = () => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Data Fetching with Dependencies</h2>
      <label>User ID: </label>
      <input
        type="number"
        value={userId}
        onChange={(e) => 
            setUserId(Number(e.target.value))}
      />
      {data && (
        <div>
          <h3>User Details:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
export default UseEffectDependencies;
