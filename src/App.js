import logo from './logo.svg';
import './App.css';
import data from './data';
import {useState} from "react";


function App() {
  const [item2 , setItem2] = useState(data)
  const UpdateItem=(carditem)=>{
const filterProduct = data.filter((curditem4)=>{
  return curditem4.category===carditem
})
setItem2(filterProduct)
  }
  return (
    <div className="App">
     <button onClick={()=>setItem2(data)} >All</button>
     <button onClick={()=>UpdateItem("men's clothing")}>men's clothing</button>
     <button onClick={()=>UpdateItem("women's clothing")}>Women</button>
     <button onClick={()=>UpdateItem("jewelery")}>jewelery</button>
     {/* <button onClick={}>jewelery</button> */}
<div className="app-2">
  {
    item2.map((item)=>{
      return <div class="card" style={{width: "18rem"}}>
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.category}</h5>
        <a href="#" class="btn btn-primary"></a>
      </div>
    </div>
    })
  }
</div>

    </div>
  );
}

export default App;
