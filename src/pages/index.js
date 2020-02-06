import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ProductFilter from "../components/Level1/product_filter"
import ProductsFilter from "../components/ProductsFilter/products_filter"

const IndexPage = props => {
  //data organizing
  const allBatteryData = props.data.allBattery.edges
  const allCarData = props.data.allCar.edges
  //create image hash table
  let images_quantity = props.data.allBatteryImage.edges.length
  let allBatteryImageData = {}
  let key = ""
  for (let i = 0; i < images_quantity; i++) {
    key = props.data.allBatteryImage.edges[
      i
    ].node.childImageSharp.fluid.originalName.split(".")[0]
    allBatteryImageData[key] =
      props.data.allBatteryImage.edges[i].node.childImageSharp.fluid
  }

  return (
    <>
      <SEO title="Home" />
      <h1>Hi, this is the home page</h1>
      <ProductFilter
        batteryData={allBatteryData}
        batteryImages={allBatteryImageData}
        carData={allCarData}
      />
      <ProductsFilter
        batteryData={allBatteryData}
        batteryImages={allBatteryImageData}
        carData={allCarData}
      />
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

    allBatteryImage: allFile(
      filter: { sourceInstanceName: { eq: "battery_images" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
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
