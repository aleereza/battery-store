import React from "react"
import FilterCars from "./filter_cars"
import FilterAmps from "./filter_amps"

class FilterCollector extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedOptions: [] }
    this.onOptionsChange = this.onOptionsChange.bind(this)
  }

  onOptionsChange(selectedOptions) {
    this.setState({ selectedOptions: selectedOptions })
  }

  render() {
    return (
      <>
        <FilterCars
          options={["a", "b", "c"]}
          onOptionsChange={this.onOptionsChange}
        />
        <FilterAmps
          options={["a", "b", "c"]}
          onOptionsChange={this.onOptionsChange}
        />
        <p>Selected Options: {this.state.selectedOptions + ""}</p>
      </>
    )
  }
}

export default FilterCollector
