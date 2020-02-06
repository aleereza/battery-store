import React from "react"
import FilterCollector from "./filter_collector"

class ProductsFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { FilteredProducts: [] } //product indices
    this.onProductsChange = this.onProductsChange.bind(this)
  }

  onProductsChange(FilteredProducts) {
    this.setState({ FilteredProducts: FilteredProducts })
  }

  render() {
    return (
      <>
        <FilterCollector
          carData={this.props.carData}
          batteryData={this.props.batteryData}
          onProductsChange={this.onProductsChange}
        />
        <p>Filtered products: {this.state.FilteredProducts + ""}</p>
      </>
    )
  }
}

export default ProductsFilter
