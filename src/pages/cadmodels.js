import React from "react"
import { Box, Heading, Text, Center, HStack } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ModelPage = () => {
  return (
    <Layout heroText="JFSS Royals">
      <SEO title="CAD Robot Models" />

      <Center>
        <Box>
          <Heading as="h1" size="lg" style={{ textAlign: "center" }}>
            CAD Robot Models
          </Heading>
          <Text style={{ textAlign: "center" }}>
            Here, you'll find all the CAD models that we've designed.
          </Text>
        </Box>
      </Center>

      <br />

      <Center>
        <HStack spacing="2vw">
          <Box w="60vw" height="70vh">
            <Box width="100%" height="100%">
              <iframe
                title="3D Model"
                src="https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed"
                width="100%"
                height="100%"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                alt="3D Model"
                mozallowfullscreen="true"
                frameborder="0"
              ></iframe>
            </Box>
          </Box>

          <Box w="30vw" height="70vh">
            <Box borderRadius="lg" bg={"blue.100"} width="100%" height="100%" px={5}>
              <Heading as="h3" size="lg" style={{ textAlign: "center" }} py={5}>
                VEX 2020-2021 Change Up Season
              </Heading>
              <Text style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at nisi fringilla, posuere quam eget, posuere lacus.
                Nunc ultricies lorem at massa lobortis congue. Nulla mauris
                mauris, sagittis et elementum eu, tristique sed felis.
                Suspendisse venenatis nibh vitae odio eleifend, eget finibus
                mauris ullamcorper. Integer eget malesuada justo, non ultrices
                dolor. Maecenas quis libero vel nisl sodales condimentum quis eu
                lorem. Aliquam eu aliquet dui. Sed elementum, ipsum non finibus
                fermentum, nisi dolor pellentesque neque, ac euismod ante lacus
                quis turpis. Nam sit amet ipsum nec ipsum aliquet viverra.
                Maecenas ut viverra mi. Vivamus non lorem massa.
              </Text>
            </Box>
          </Box>
        </HStack>
      </Center>
    </Layout>
  )
}

export default ModelPage
