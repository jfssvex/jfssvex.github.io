import PropTypes from "prop-types"
import React from "react"
import {
  Stack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import { ChevronDownIcon } from "@chakra-ui/icons"

const Header = ({ siteTitle }) => (
  <Stack as="header" bg="purple.800" width="100%" direction="row" padding="4">
    <Link to="/">
      <Heading as="p" size="xl" color="white">
        {siteTitle}
      </Heading>
    </Link>
    <Menu>
      <MenuButton
        as={Button}
        style={{ position: "absolute", top: "30px", right: "42%" }}
        rightIcon={<ChevronDownIcon />}
        variant="link"
        colorScheme="blue"
      >
        About
      </MenuButton>
      <MenuList>
        <Link to="/vex">
          <MenuItem>What is VEX</MenuItem>
        </Link>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
    <Menu>
      <Link to="/team">
        <MenuButton
          as={Button}
          variant="link"
          colorScheme="blue"
          style={{ position: "absolute", top: "30px", right: "30%" }}
        >
          {" "}
          Team
        </MenuButton>
      </Link>
    </Menu>
    <Menu>
      <MenuButton
        as={Button}
        style={{ position: "absolute", top: "30px", right: "15%" }}
        rightIcon={<ChevronDownIcon />}
        variant="link"
        colorScheme="blue"
      >
        Resources
      </MenuButton>
      <MenuList>
        <Link to="https://schools.peelschools.org/sec/johnfraser/Pages/default.aspx">
          <MenuItem>Documentation</MenuItem>
        </Link>
        <Link to="https://github.com/jfssvex/jfssvex.github.io">
          <MenuItem>Github</MenuItem>
        </Link>
        <Link to="https://www.vexrobotics.com/">
          <MenuItem>VEX</MenuItem>
        </Link>
        <Link to="https://schools.peelschools.org/sec/johnfraser/Pages/default.aspx">
          <MenuItem>School</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  </Stack>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
