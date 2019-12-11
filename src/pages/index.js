import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ProductFilter from "../components/Level1/product_filter"

const IndexPage = props => {
  const allBatteryData = props.data.allBattery.edges
  console.log(allBatteryData)
  return (
    <>
      <SEO title="Home" />
      <h1>Hi, this is the home page</h1>
      <ProductFilter />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query batteryQuery {
    allBattery: allBatteryCsv {
      edges {
        node {
          index
          brand
          amp
          price
        }
      }
    }
  }
`
