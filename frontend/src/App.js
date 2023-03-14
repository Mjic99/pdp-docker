import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:4000/products')
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div className="App">
      <h1>This is a test app</h1>
      <ul>
        {products.map((x) =>
          <div key={x.id} style={{fontSize: '40px'}}>{x.name}</div>
        )}
      </ul>
    </div>
  );
}

export default App;
