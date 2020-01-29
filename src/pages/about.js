import React from "react"
import SEO from "../components/seo"
import FilterCollector from "../components/ProductsFilter/filter_collector"
import { css } from "@emotion/core"

const options = ["option1", "option2", "option3", "option4", "option5"]

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <SEO title="About" />
        <h1>About page</h1>
        <p>the selected option is: {options[this.state.selectedIndex]}</p>
        <p>the selected index is: {this.state.selectedIndex}</p>
        <p>test new ProductsFilter component:</p>
        <FilterCollector />
      </>
    )
  }
}

export default AboutPage
