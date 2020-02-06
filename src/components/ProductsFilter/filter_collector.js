import React from "react"
import FilterCars from "./filter_cars"
import FilterAmps from "./filter_amps"

class FilterCollector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProducts: [],
      fCarsSelectedindex: [],
      fAmpsSelectedindex: 0,
    }
    this.onOptionsChange = this.onOptionsChange.bind(this)
    this.onCarsChange = this.onCarsChange.bind(this)
    this.onAmpUp = this.onAmpUp.bind(this)
    this.onAmpDown = this.onAmpDown.bind(this)
  }

  //handle cars filter states
  onCarsChange(option, selected) {
    if (selected) {
      this.setState(
        prevState => {
          prevState.fCarsSelectedindex.push(option)
          return {
            fCarsSelectedindex: prevState.fCarsSelectedindex,
          }
        },
        () => this.onOptionsChange()
      )
    } else {
      this.setState(
        prevState => {
          const index = prevState.fCarsSelectedindex.indexOf(option)
          if (index > -1) {
            prevState.fCarsSelectedindex.splice(index, 1)
          }
          return {
            fCarsSelectedindex: prevState.fCarsSelectedindex,
          }
        },
        () => this.onOptionsChange()
      )
    }
  }

  //handle Amps filter state
  onAmpUp(optionsLength) {
    this.setState(
      prevState => ({
        fAmpsSelectedindex:
          (((prevState.fAmpsSelectedindex + 1) % optionsLength) +
            optionsLength) %
          optionsLength,
      }),
      () => this.onOptionsChange()
    )
  }

  onAmpDown(optionsLength) {
    this.setState(
      prevState => ({
        fAmpsSelectedindex:
          (((prevState.fAmpsSelectedindex - 1) % optionsLength) +
            optionsLength) %
          optionsLength,
      }),
      () => this.onOptionsChange()
    )
  }

  onOptionsChange() {
    this.setState({ selectedProducts: [] })
  }

  render() {
    // const [cars] = this.props.carData
    // console.log("====", cars)
    return (
      <>
        <FilterCars
          options={["a", "b", "c"]}
          selected={this.state.fCarsSelectedindex}
          onOptionsChange={this.onCarsChange}
        />
        <FilterAmps
          options={["a", "b", "c"]}
          up={this.onAmpUp}
          down={this.onAmpDown}
          selectedIndex={this.state.fAmpsSelectedindex}
        />
        <hr />
        <p>
          All Selected Options:{" "}
          {this.state.fCarsSelectedindex + ", " + this.state.fAmpsSelectedindex}
        </p>
        <p>Car Example: {this.props.carData[0].node.car + ""}</p>
      </>
    )
  }
}

export default FilterCollector
