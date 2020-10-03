import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
        <Heading as="h2" size="lg">What is VEX?</Heading>
        <Text>
          VEX is a popular robotics competition held worldwide.
          Teams build a robot with provided parts and program it to run through a course and complete objectives, 
          such as throwing a ball in a hoop and moving objects. 
          You do not need to have prior experience with the competition to apply to the club, 
          but be sure to learn as much as you can so you can lead the team to success in the coming year.
        </Text>
        <Text as="a" href="https://www.vexrobotics.com/">Learn more at the VEX robotics website. </Text>
    </Layout>
  )
}

export default IndexPage
