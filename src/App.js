// import logo from './logo.svg';
// import './App.css';

import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Ikoyi-Mall</a>
      </header>
      <main>
        <h1>Featured Product</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>{product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
