import React from "react"
import Product from "./product"
import { css } from "@emotion/core"

class Products extends React.Component {
  render() {
    const products = this.props.products
    const images = this.props.images
    // const productsData = this.props.data
    const productsStyle = css`
      display: flex;
    `
    const productStyle = css`
      flex: 1 1 auto;
    `
    return (
      <div css={productsStyle}>
        {products.map((product, index) => {
          return (
            <div css={productStyle}>
              <Product
                data={product}
                key={index}
                image={images[product.index]}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Products
