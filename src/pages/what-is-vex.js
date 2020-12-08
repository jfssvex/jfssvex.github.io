import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text } from "@chakra-ui/core"

import { Box, SimpleGrid, Image } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const VexPage = () => {
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
      <SEO title="What is VEX?" />
      {/* <h1>Hi people</h1> */}
      <Box px={5} width="95vw">
        <br />

        <Heading as="h2" size="lg" style={{ textAlign: "center" }}>
          What is VEX?
        </Heading>
        <br />
        <Text>
          The VEX Robotics Competition is a popular robotics program for
          students worldwide, held by Innovation First International. Teams
          build a robot with provided VEX parts and program it to run through a
          course and complete objectives, such as throwing a ball in a hoop or
          stacking cubes into towers and cups. Each challenge allows students to
          expand their knowledge within the domains of engineering, design,
          programming, and of course, teamwork! For VRC specifically, high
          school and middle school students are able to compete with their built
          robots. For younger students, VEX-IQ is available, and for
          post-secondary students, VEXU is available.
          <br />
          <br />
          VEX is an excellent learning opportunity for students - just ask our
          team members! Building a robot from the ground up with your team
          teaches you to think critically and learn much more about design.
          Students get to become part of a team working towards the same
          objective, building tight-knit bonds and friendships with their
          teammates. Participating in competitions with your team is also an
          excellent experience, allowing members to meet other individuals who
          are passionate for STEM.
        </Text>
        <br />

        <Text as="a" href="https://www.vexrobotics.com/">
          Learn more at the VEX robotics website.{" "}
        </Text>
        <br />
        <br />
        <br />
        <br />

        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Image
              src="https://www.vexrobotics.com/media/wysiwyg/VRC-ChangeUp-Comp_2.jpg"
              alt="Game Zone"
            />
          </Box>
          <Box>
            <Heading as="h4" size="md">
              2020-2021 Game
            </Heading>
            <br />
            <Text>
              VEX Robotics Competition Change Up is played on a 12’x12’ square
              field configured as seen above. Two (2) Alliances – one (1) “red”
              and one (1) “blue” – composed of two (2) Teams each, compete in
              matches consisting of a fifteen (15) second Autonomous Period,
              followed by a one minute and forty-five second (1:45) Driver
              Controlled Period. The object of the game is to attain a higher
              score than the opposing Alliance by placing Balls in Goals, and
              Connecting Rows.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <center>
        <Footer data={data} year={year} />
      </center>
    </Layout>
  )
}

export default VexPage
