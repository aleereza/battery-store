import React from "react"
import { css } from "@emotion/core"
import { containerInStyle, containerOutStyle } from "../../data/styles"

class ProductFilter extends React.Component {
  render() {
    const wrapperStyle = css`
      display: grid;
      grid-template-columns: 10rem auto;
    `
    const filtersStyle = css`
      grid-column: 1/2;
      background-color: pink;
    `
    const productsStyle = css`
      grid-column: 2/3;
      background-color: magenta;
    `
    return (
      <div css={wrapperStyle}>
        <div css={filtersStyle}>filters</div>
        <div css={productsStyle}>products</div>
      </div>
    )
  }
}

export default ProductFilter
