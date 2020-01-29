import React from "react"
import Product from "./product"
import { css } from "@emotion/core"

class Products extends React.Component {
  render() {
    const products = this.props.products
    const images = this.props.images
    const filteredProducts = this.props.filteredProducts

    const productsStyle = css`
      display: flex;
    `
    const productStyle = css`
      flex: 1 1 auto;
    `
    return (
      <div css={productsStyle}>
        {filteredProducts.map((productIndex, index) => {
          return (
            <div css={productStyle}>
              <Product
                data={products[productIndex]}
                key={index}
                image={images[products[productIndex].index]}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Products
