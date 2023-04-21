import React from "react";

const PrintList = (props) => {

   const deleteHandler = (id) => {
      props.deleteData(id)
   }

  return (
    <div>
      <h1>Products</h1>
      <h3>Food Items</h3>
      {props.data.find(o => o.category === 'Food')
        ? props.data.map((list) => (
            <li key={list.id}>
              {list.price}-
              {list.name}-
              {list.category}-
              <button onClick={()=>deleteHandler(list.id)}>Delete Product</button>
            </li>
          ))
        : null}
      <h3> Electronics Items</h3>
      {props.data.find(o => o.category === 'Electronics')
        ? props.data.map((list) => (
            <li key={list.id}>
              {list.price}-
              {list.name}-
              {list.category}-
              <button onClick={()=>deleteHandler(list.id)}>Delete Product</button>
            </li>
          ))
        : null}
      <h3>SkinCare Items</h3>
      {props.data.find(o => o.category === 'SkinCare')
        ? props.data.map((list) => (
            <li key={list.id}>
              {list.price}-
              {list.name}-
              {list.category}-
              <button onClick={()=>deleteHandler(list.id)}>Delete Product</button>
            </li>
          ))
        : null}
    </div>
  );
};

export default PrintList;
