import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ProductFilter from "../components/Level1/product_filter"

const IndexPage = props => {
  const allBatteryData = props.data.allBattery.edges
  const allCarData = props.data.allCar.edges
  console.log(allBatteryData)
  return (
    <>
      <SEO title="Home" />
      <h1>Hi, this is the home page</h1>
      <ProductFilter batteryData={allBatteryData} carData={allCarData} />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
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

    allCar: allCarCsv {
      edges {
        node {
          index
          car
          minapm
          maxamp
          type
        }
      }
    }
  }
`
