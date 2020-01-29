import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const productStyle = css`
      margin: 1rem;
      border: 1px solid black;
    `
    return (
      <div css={productStyle} key={this.props.index}>
        <Img fluid={this.props.image} />
        <p>Brand: {this.props.data.brand}</p>
        <p>Amp: {this.props.data.amp}</p>
        <p>Price: {this.props.data.price}</p>
      </div>
    )
  }
}

export default Product
