// Regular action creator
export const increment = () => ({
  type: "INCREMENT",
});

// Usage in a component file
dispatch(increment());

// Thunk action creator
// export const fetchData = () => (dispatch) => {
//   // Asynchronous logic, e.g., API call using fetch
//   fetch("https://api.example.com/data")
//     .then((response) => response.json())
//     .then((data) => dispatch({ type: "SUCCESS", payload: data }))
//     .catch((error) => dispatch({ type: "FAILURE", payload: error.message }));
// };

// Usage in a component
dispatch(fetchData());

export const fetchData = () => async (dispatch) => {
  try {
    const data = await api.fetchData();
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error.message });
  }
};
