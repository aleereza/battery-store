import React from "react"

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div key={this.props.index}>
        <p>Brand: {this.props.data.brand}</p>
        <p>Amp: {this.props.data.amp}</p>
        <p>Price: {this.props.data.price}</p>
      </div>
    )
  }
}

export default Product
