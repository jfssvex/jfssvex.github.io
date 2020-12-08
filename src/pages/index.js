import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text, Image, SimpleGrid, Center } from "@chakra-ui/core"
import Skills from "../components/skills"
import ContactFrom from "../components/contact"
import Other from "../components/other"

import { Box } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "thingyHeroImage.png" }) {
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
    <Layout heroImage={data.heroImage} heroText="Royals - 82050">
      <SEO title="Home" />
      {/* <h1>Hi people</h1> */}
      <br />
      <Center>
        <Box px={5} width="95vw">
          <SimpleGrid columns={2} spacing={50}>
            <Box>
              <Heading as="h2" size="lg">
                Who Are We?
              </Heading>
              <Text>
                The John Fraser SS Royals are a group of students passionate for
                robotics, engineering, design, and programming. We compete in
                the high school VEX Robotics Competition in Ontario, every year
                constructing and coding a new robot to complete a challenge and
                compete with other teams across the province. Created in 2017,
                the club has expanded to include several members and also two
                teams for the 2019/20 season (82050A and 82050B). Unfortunately,
                only 82050A is running for Change Up due to COVID-19 and social
                distancing policies. We have been able to run because of our
                amazing teacher supervisors: Mr. Ghorvei, Ms. McEwen, and Mr.
                Lightbody - thank you! Furthermore, our school is able to fund
                us directly and is always advocating for us, thanks to our
                principal, Ms. Kaukab, and other office staff such as Ms.
                Santilli and Ms. Coulter!
              </Text>
            </Box>
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/logoRoyals.png")}
              alt="who are we"
            />
          </SimpleGrid>
        </Box>
      </Center>
      <center>
        <Box mt={20}>
          <Skills />
        </Box>
        <Box mt={20}>
          <Other />
        </Box>
        <br />
        <br />
        <br />
        <ContactFrom />
        <br />
        <Footer data={data} year={year} />
      </center>
    </Layout>
  )
}

export default IndexPage
