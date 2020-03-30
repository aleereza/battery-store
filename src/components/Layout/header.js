import React from "react"
import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  classes,
  MenuIcon,
  Button,
  IconButton,
} from "@material-ui/core"

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h2">{this.props.siteTitle}</Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    )
  }
}

export default Header
