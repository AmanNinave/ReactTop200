import React, { useState, useEffect } from "react";

function MyComponentRule1() {
  // Use Hooks at the Top Level
  const [count, setCount] = useState(0);
  // Remaining code of component...
}

function MyComponent2Rule1() {
  // Component code...
  // Hook at middle or bottom
  const [count, setCount] = useState(0);
}

function MyComponentRule2() {
  // Only call Hooks from React Components
  const [count, setCount] = useState(0);
}

function someFunction() {
  // Not from normal or nested JS functions
  const [count, setCount] = useState(0);
}

function MyComponent1Rule3() {
  // Keep Hooks order consistent
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
}

function MyComponent2Rule3() {
  // Don't change hook order
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
}
