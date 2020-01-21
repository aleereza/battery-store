import React from "react"
import SEO from "../components/seo"
import SelectMenu from "../components/test/SelectMenu"
import { css } from "@emotion/core"

const options = ["option1", "option2", "option3", "option4", "option5"]

class AboutPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedIndex: 0 }
    this.upUpdater = this.upUpdater.bind(this)
    this.downUpdater = this.downUpdater.bind(this)
  }

  // upUpdater() {
  //   this.setState(prevState => {
  //     let updatedIndex = prevState.selectedIndex
  //     if (updatedIndex + 1>0){
  //       updatedIndex = ((updatedIndex % options.length) + options.length) % options.length
  //     } else
  //     return { selectedIndex: updatedIndex }
  // }

  upUpdater() {
    this.setState(prevState => ({
      selectedIndex:
        (((prevState.selectedIndex + 1) % options.length) + options.length) %
        options.length,
    }))
  }

  downUpdater() {
    this.setState(prevState => ({
      selectedIndex:
        (((prevState.selectedIndex - 1) % options.length) + options.length) %
        options.length,
    }))
  }

  render() {
    return (
      <>
        <SEO title="About" />
        <h1>About page</h1>
        <p>the selected option is: {options[this.state.selectedIndex]}</p>
        <p>the selected index is: {this.state.selectedIndex}</p>
        {/* SelectMenu usage */}
        <SelectMenu
          initialIndex={0}
          activeIndex={this.state.selectedIndex}
          options={options}
          up={this.upUpdater}
          down={this.downUpdater}
        />
      </>
    )
  }
}

export default AboutPage
