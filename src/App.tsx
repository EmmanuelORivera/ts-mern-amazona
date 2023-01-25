import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sampleProducts } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <header>TS Amazona</header>
        <main>
          <ul>
            {sampleProducts.map((product) => (
              <li key={product.slug}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        </main>
        <footer>All rights reserved</footer>
      </div>
    </div>
  )
}

export default App
