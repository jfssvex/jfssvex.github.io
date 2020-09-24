/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Stack } from "@chakra-ui/core"

import Header from "./header"
import "./layout.css"
import Hero from "./hero"

const Layout = ({ children, heroImage, heroText }) => {
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
    <Flex direction="column">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {heroImage ? <Hero image={heroImage} text={heroText} /> : null}
      <Stack as="main" direction="column" padding="4">{children}</Stack>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
