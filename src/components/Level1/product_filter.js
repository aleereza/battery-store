import React from "react"
import { css } from "@emotion/core"
import { containerInStyle, containerOutStyle } from "../../data/styles"
import Filters from "../Level0/filters"
import Product from "../Level0/product"
import Products from "../Level0/products"
import Img from "gatsby-image"

class ProductFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { products: [] } //product indices
    this.updateProducts = this.updateProducts.bind(this)
    this.removeFilter = this.removeFilter.bind(this)
  }

  componentDidMount() {
    this.removeFilter()
  }

  removeFilter() {
    let filteredProducts = []
    let allproducts = this.props.batteryData
    allproducts.forEach(element => {
      filteredProducts.push(element.node)
    })
    this.setState({ products: filteredProducts })
  }

  updateProducts(filters) {
    let filteredProducts = []
    let allproducts = this.props.batteryData
    if (filters.amp.length === 0) {
      this.removeFilter()
    } else {
      filteredProducts = []
      allproducts.forEach(element => {
        if (filters.amp.includes(element.node.amp)) {
          filteredProducts.push(element.node)
        }
      })
      this.setState({ products: filteredProducts })
    }
  }

  render() {
    //not sure if it is the best place to do this:
    let ampOptions = []
    this.props.batteryData.forEach((element, index) => {
      ampOptions.push(element.node.amp)
    })

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
      /* background-color: magenta; */
    `

    console.log("battery images", this.props.batteryImages)
    return (
      <div css={wrapperStyle}>
        <div css={filtersStyle}>
          <Filters
            updater={this.updateProducts}
            filters={{ amp: ampOptions }}
          />
        </div>
        <div css={productsStyle}>
          <Products
            products={this.state.products}
            images={this.props.batteryImages}
          />
        </div>
      </div>
    )
  }
}

export default ProductFilter
