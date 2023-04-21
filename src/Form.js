import React, { useState } from "react";

const Form = (props) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newlist = {
      id: id,
      price: price,
      name: name,
      category: category,
    };
    props.dataHandler(newlist);
    setId("");
    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Product Id</label>
        <input
          type="number"
          onChange={(e) => setId(e.target.value)}
          value={id}
        ></input>
        <label>Selling Price</label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></input>
        <label>ProductName</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label htmlFor="category">Select a category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        >
          <option> </option>
          <option value="Food">Food </option>
          <option value="Electronics">Electronics</option>
          <option value="SkinCare">SkinCare</option>
        </select>

        <button>Add product</button>
      </form>
    </div>
  );
};

export default Form;
