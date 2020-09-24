import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  return (
    <Layout heroImage={data.heroImage} heroText="JFSS Royals">
      <SEO title="Home" />
      {/* <h1>Hi people</h1> */}
        <Heading as="h2" size="lg">Hi people</Heading>
        <Text>Welcome to your new Gatsby site.</Text>
        <Text>Now go build something great.</Text>
    </Layout>
  )
}

export default IndexPage
