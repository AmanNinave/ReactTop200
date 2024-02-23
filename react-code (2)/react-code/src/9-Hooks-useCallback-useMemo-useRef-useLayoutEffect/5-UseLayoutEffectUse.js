import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffectUse = () => {
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
    const fetchData = async () => {
      // Fetch API data
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      setData(result);

      // Update styles based on the fetched data
      const element = document.getElementById("myElement");
      if (element && result && result.title) {
        element.style.fontWeight = "bold";
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p id="myElement">Update this element 
      to bold after data fetch</p>
      
      {data && <p>{data.title}</p>}
    </div>
  );
};

export default UseLayoutEffectUse;
