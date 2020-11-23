import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text } from "@chakra-ui/core"
import Skills from "../components/skills"
import ContactFrom from "../components/contact"
import Other from "../components/other"

import { Box, SimpleGrid, Image } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HistoryPage = () => {
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
  const year = new Date().getFullYear() || "2020"

  return (
    <Layout heroText="JFSS Royals">
      {/* <h1>Hi people</h1> */}
      <Box px={5} width="95vw">
        <br />

        <Heading as="h2" size="lg" style={{ textAlign: "center" }}>
          Our Team History
        </Heading>
        <br />
        <Text>Insert Infographic Like Thing Here</Text>
        <br />
      </Box>

      <center>
        <Footer data={data} year={year} />
      </center>
    </Layout>
  )
}

export default HistoryPage
