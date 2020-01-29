import React from "react"
import Option from "./option"

class FilterCars extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedOptions: [] }
    this.onOptionsChange = this.onOptionsChange.bind(this)
  }

  onOptionsChange(option, selected) {
    if (selected) {
      this.setState(
        prevState => {
          prevState.selectedOptions.push(option)
          return {
            selectedOptions: prevState.selectedOptions,
          }
        },
        () => this.props.onOptionsChange(this.state.selectedOptions)
      )
    } else {
      this.setState(
        prevState => {
          const index = prevState.selectedOptions.indexOf(option)
          if (index > -1) {
            prevState.selectedOptions.splice(index, 1)
          }
          return {
            selectedOptions: prevState.selectedOptions,
          }
        },
        () => this.props.onOptionsChange(this.state.selectedOptions)
      )
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Choose your Option</legend>
        {this.props.options.map((option, index) => (
          <Option option={option} onOptionChange={this.onOptionsChange} />
        ))}
        <p>selected options: {">" + this.state.selectedOptions}</p>
      </fieldset>
    )
  }
}

export default FilterCars
