import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text, Link } from "@chakra-ui/core"
import Skills from "../components/skills"
import ContactFrom from "../components/contact"

import { Box } from "@chakra-ui/core"
import Footer from "../components/footer"

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
  const year = new Date().getFullYear() || "2020"

  return (
    <Layout heroImage={data.heroImage} heroText="JFSS Royals">
      <SEO title="Home" />
      {/* <h1>Hi people</h1> */}
      <Heading as="h2" size="lg">
        What is VEX?
      </Heading>
      <Text>
        VEX is a popular robotics competition held worldwide. Teams build a
        robot with provided parts and program it to run through a course and
        complete objectives, such as throwing a ball in a hoop and moving
        objects. You do not need to have prior experience with the competition
        to apply to the club, but be sure to learn as much as you can so you can
        lead the team to success in the coming year.
      </Text>
      <Link color="blue.600" href="https://www.vexrobotics.com" isExternal>
        Learn more at the VEX robotics website.{" "}
      </Link>
      <center>
        <Box mt={20}>
          <Skills />
        </Box>
      </center>
      <br />
      <br />
      <br />
      <ContactFrom />
      <Footer data={data} year={year} />
    </Layout>
  )
}

export default IndexPage
