import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandle = (index) => {
    if (index >= 1 && index <= products.length / 10 && page !== index)
      setPage(index)
  }

  return (
    <div>
      {
        products.length > 0 && <div className='products'>
          {
            products.slice(page * 10 - 10, page * 10).map((product, index) => (
              <span className='products__single' key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </span>
            ))
          }
        </div>
      }
      {
        products.length > 0 && <div className='pagination'>
          <span className={page > 1 ? "" : "pagination_disabled"}
            onClick={() => selectPageHandle(page - 1)}>◀</span>
          {
            [...Array(products.length / 10)].map((_, index) => {
              return <span
                className={page === index + 1 ? "pagination_selected" : ""} onClick={() => selectPageHandle(index + 1)}>{index + 1}</span>
            })
          }
          <span
            className={page < products.length / 10 ? "" : "pagination_disabled"}
            onClick={() => selectPageHandle(page + 1)}>▶</span>
        </div>
      }
    </div>
  );
}

export default App;
