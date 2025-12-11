import React, { useState } from 'react'
import classes from "./ProductForm.module.css"

const ProductForm = ({callback}) => {

  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")

  const urlProducts = "http://localhost:3000/products"

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!productName || !productPrice) return

    console.log(productName, parseFloat(productPrice).toFixed(2))

    const name = productName
    const price = parseFloat(productPrice).toFixed(2)

    const product = {
      "name": name,
      "price": price
    }

    const res = await fetch(urlProducts, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product)
    })

    setProductName("")
    setProductPrice("")
  }

  return (
    <>
      <div className="header">
        <h1 className={classes.title}>Cadastro de Produtos</h1>
        <p className={classes.desc}>Cadastre seu produto abaixo.</p>
      </div>
      <form className={classes.productForm} onSubmit={handleSubmit}>
        <label htmlFor="productName">Nome do Produto:</label>
        <input type="text" name="productName" className={classes.nameInput} required value={productName} placeholder='Digite o nome do seu produto aqui:' onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="productPrice">Preço do produto:</label>
        <input type="number" name="productPrice" className={classes.priceInput} required value={productPrice} placeholder="Digite o preço do seu produto aqui:" onChange={(e) => setProductPrice(e.target.value)}        />
        <div className={classes.btnContainer}>
          <button className={classes.submitBtn}>Enviar</button>
          <button className={classes.showProductsBtn} onClick={callback}>Listar Produtos</button>
        </div>
      </form>
    </>
  )
}

export default ProductForm