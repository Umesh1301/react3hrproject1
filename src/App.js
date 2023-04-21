import React, { useState } from "react";
import Form from "./Form";
import PrintList from "./PrintList";

function App() {
  const [data, setData] = useState([]);

  const dataHandler = (printdata) => {
    const newarray = [...data, printdata];
    setData(newarray);
  };

  const deleteData = (id) => {
    const myData = [...data];
    const del = myData.filter((i) => i.id !== id);
    setData(del);
  };

  return (
    <div>
      <Form dataHandler={dataHandler} />
      <PrintList data={data} deleteData={deleteData}/>
    </div>
  );
}

export default App;
