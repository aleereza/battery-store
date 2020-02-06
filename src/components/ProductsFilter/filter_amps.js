import React from "react"
import SelectMenu from "./SelectMenu"
import { css } from "@emotion/core"

class FilterAmps extends React.Component {
  constructor(props) {
    super(props)

    // this.state = { selectedIndex: 0 }
    // this.upUpdater = this.upUpdater.bind(this)
    // this.downUpdater = this.downUpdater.bind(this)
  }

  render() {
    return (
      <SelectMenu
        activeIndex={this.props.selectedIndex}
        options={this.props.options}
        up={this.props.up}
        down={this.props.down}
      />
    )
  }
}

export default FilterAmps
