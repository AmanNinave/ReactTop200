import React, { useMemo } from 'react';

const UseMemo = ({ data }) => {
  const processedData = useMemo(() => {
    // Expensive computation on data
    return processedData(data);
  }, [data]);

  return (
    <div>
      {/* Render using the memoized value */}
      {processedData}
    </div>
  );
};

export default UseMemo;
