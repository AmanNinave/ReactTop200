import React, { useState } from "react";

const AppForm = () => {
  // Step 1: Initialize state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 4: Perform validation
    if (formData.username && formData.password) {
      // Valid form, proceed with submission
      console.log("Form submitted:", formData);
    } else {
      // Display error messages or handle invalid form
      console.error("Invalid form data");
    }
  };

  // Step 4: Render the form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppForm;
