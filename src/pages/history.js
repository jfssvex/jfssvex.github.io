import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text, Center } from "@chakra-ui/core"
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
          Royals Timeline
        </Heading>
        <br />
        <br />

        <Center>
          <Image
            boxSize="70vw"
            objectFit="cover"
            draggable={false}
            src={require("../images/vextimeline.png")}
            alt="Dan Abramov"
          />
        </Center>
      </Box>
      <br />
      <br />

      <center>
        <Footer data={data} year={year} />
      </center>
    </Layout>
  )
}

export default HistoryPage
