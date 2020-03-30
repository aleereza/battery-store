import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import { Global } from "@emotion/core"
import { global } from "../../data/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../../data/theme"
import Container from "@material-ui/core/Container"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container maxWidth="lg">
          <Main>{children}</Main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
