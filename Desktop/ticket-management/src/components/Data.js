import React, {useState, useEffect} from 'react';

const Datas = () => {
  const [data , setData] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      if(!response.ok){
        throw new Error("no data");
      }
      return response.json();
    }).then((apiData)=>{
      setData(apiData);
    }).catch((error) => {
      console.log("error: ", error)
    })
  }
  useEffect(()=> {
    fetchData();
  })
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  }

const filteredData = searchItem ? data.filter((item) => item.id === Number(searchItem)) : data;
  return (
    <div className='App'>
    <div>
      <input type="text" placeholder="Search by Title" onChange={handleChange} />
    </div>
      {filteredData.map((item) => (
        <><p>{item.id}</p><p>{item.title}</p></>
      ))}
    </div>
  );
}

export default Datas;

