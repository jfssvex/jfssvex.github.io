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
  Spacer,
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
    <Spacer />
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="purple"
      >
        About
      </MenuButton>
      <MenuList>
        <Link to="/what-is-vex">
          <MenuItem>What is VEX</MenuItem>
        </Link>
        <Link to="/history">
          <MenuItem>Our History</MenuItem>
        </Link>
      </MenuList>
    </Menu>
    <Button as={Link} to="/team" colorScheme="purple">
      Team
    </Button>
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="purple"
      >
        Resources
      </MenuButton>
      <MenuList>
        <Link to="https://drive.google.com/drive/folders/11m41EBCE_DG69Flks_AlaHAgajLtyDSM?usp=sharing">
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
