
import React, { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      console.log("Title:", result.title);
    };
    fetchData();
  }, []); 

  return (
    <div>
      <p>Data is being fetched...</p>
    </div>
  );
}
export default UseEffect;






