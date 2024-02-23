
// Action creator
const increment = (amount) => {
  return {
    type: "INCREMENT",
    payload: {
      amount: amount,
    },
  };
};

// Action object
const incrementAction = increment(2);
incrementAction = {
  type: "INCREMENT",
  payload: { amount: 2 },
};

// Action type
var actionType = incrementAction.type;

