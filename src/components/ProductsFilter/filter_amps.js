import React from "react"
import SelectMenu from "./SelectMenu"
import { css } from "@emotion/core"

class FilterAmps extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedIndex: 0 }
    this.upUpdater = this.upUpdater.bind(this)
    this.downUpdater = this.downUpdater.bind(this)
  }

  upUpdater() {
    this.setState(
      prevState => ({
        selectedIndex:
          (((prevState.selectedIndex + 1) % this.props.options.length) +
            this.props.options.length) %
          this.props.options.length,
      }),
      () =>
        this.props.onOptionsChange([
          this.props.options[this.state.selectedIndex],
        ])
    )
  }

  downUpdater() {
    this.setState(
      prevState => ({
        selectedIndex:
          (((prevState.selectedIndex - 1) % this.props.options.length) +
            this.props.options.length) %
          this.props.options.length,
      }),
      () =>
        this.props.onOptionsChange([
          this.props.options[this.state.selectedIndex],
        ])
    )
  }

  render() {
    return (
      <SelectMenu
        activeIndex={this.state.selectedIndex}
        options={this.props.options}
        up={this.upUpdater}
        down={this.downUpdater}
      />
    )
  }
}

export default FilterAmps
