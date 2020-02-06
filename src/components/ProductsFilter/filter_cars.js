import React from "react"
import Option from "./option"

class FilterCars extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { selectedOptions: [] }
    // this.onOptionsChange = this.onOptionsChange.bind(this)
  }

  render() {
    return (
      <fieldset>
        <legend>Choose your Option</legend>
        {this.props.options.map((option, index) => (
          <Option option={option} onOptionChange={this.props.onOptionsChange} />
        ))}
        <p>selected options: {">" + this.props.selected}</p>
      </fieldset>
    )
  }
}

export default FilterCars
