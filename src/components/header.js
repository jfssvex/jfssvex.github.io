import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Stack, Heading } from "@chakra-ui/core"

const Header = ({ siteTitle }) => (
  <Stack as="header" bg="purple.800" width="100%" direction="row" padding="4">
    <Link to="/">
      <Heading as="p" size="xl" color="white">
        {siteTitle}
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
