import React, { useState, useEffect } from 'react';

const CombinedEffectsExample = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  // Effect for data fetching on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Effect for updating document title based on count
  useEffect(() => {
    document.title = `Count: ${count}`;

    // Cleanup effect when count changes
    return () => {
      document.title = 'React App';
    };
  }, [count]);

  // Effect for subscribing to count changes
  useEffect(() => {
    const subscription = subscribeToCountChanges(updatedCount => {
      setCount(updatedCount);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [/* dependencies */]);

  // Render UI based on state
  return (
    <div>
      <h2>Combined Effects Example</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default CombinedEffectsExample;
