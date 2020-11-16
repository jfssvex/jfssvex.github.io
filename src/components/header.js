import PropTypes from "prop-types"
import React from "react"
import { Stack, Heading } from "@chakra-ui/core"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <Stack as="header" bg="purple.800" width="100%" direction="row" padding="4">
    <Heading as="p" size="xl" color="white">
      {siteTitle}
    </Heading>
    <Link to="/about">
      <Heading
        fontSize="25"
        style={{ position: "absolute", top: "30px", right: "30%" }}
        color="white"
      >
        About
      </Heading>
    </Link>
    <Link to="team">
      <Heading
        fontSize="25"
        style={{ position: "absolute", top: "30px", right: "15%" }}
        color="white"
      >
        Team
      </Heading>
    </Link>
  </Stack>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
