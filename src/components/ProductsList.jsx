import React, { useEffect, useState } from 'react'
import classes from "../components/ProductsList.module.css"


const ProductsList = ({callback}) => {

  const url = "http://localhost:3000/products"
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      
      const res = await fetch(url)
      const data = await res.json()
  
      setProducts(data)
    }

    getProducts()

  }, [])

  return (
    <div className={classes.listProducts}>
      <h1 className={classes.title}>Produtos</h1>

      <div className={classes.productsContainer}>
        {products.length === 0 ? (
          <p>Não existem produtos para listar</p>
        ) : (
          products.map((product) => (
            <ul className={classes.productCard}>
              <li key={product.key}>
                <span className={classes.productName}>{product.name}</span> - 
                <span className={classes.productPrice}> R$ {product.price}</span>
              </li>
            </ul>
          ))
        )}
      </div>
      <button className={classes.backBtn} onClick={callback}>Voltar</button>
    </div>
  )
}

export default ProductsList;
