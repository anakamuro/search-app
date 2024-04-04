import './App.css';
import React, {useState} from "react"
// import {data} from "./data.js"


function App() {
  // const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  console.log(search)

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => {
        return res.json()
       })
       .then((json) => {
        const results = json.filter((user)=> {
          return (value && user && user.name && user.name.toLowerCase().includes(value)
          )
        })
       setResults(results)
       })
  }

  const handleChange = (value) => {
    setSearch(value)
    fetchData(value)
  }

  return (
    <div className="App">
      <div>
        <h2>The personal information of the employee in the company</h2>
        <input 
           placeholder="Name"
           value={search}
           onChange={(e) => handleChange(e.target.value)}/>
        <div className="multi">
        {results
          //  .filter((item) => {
          //   if (search === ""){
          //     return item
          //   } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          //     return item
          //   }
          //  })
        .map(item => (
        <div className="box" key={item.id}>
        <label>Name</label>
        <span>{item.name}</span>
        <hr/>
        <label>Email</label>
        <span>{item.email}</span>
        <hr/>
        <label>Address</label>
        <span>{item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}</span>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
