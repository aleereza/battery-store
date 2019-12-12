import React from "react"
import Product from "./product"

class Products extends React.Component {
  render() {
    const products = this.props.products
    // const productsData = this.props.data
    return (
      <div>
        {products.map((product, index) => {
          return <Product data={product} key={index} />
        })}
      </div>
    )
  }
}

export default Products
