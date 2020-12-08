import { Box, Heading, SimpleGrid, Text, useColorMode } from "@chakra-ui/core"
import React from "react"
const Other = () => {
  const { colorMode } = useColorMode()

  return (
    <Box px={5} width="95vw">
      <Heading as="h1" mb={5} textAlign={["left", "center"]}>
        Interested?
      </Heading>
      <br />

      <SimpleGrid
        columns={2}
        spacing={50}
        height={{ sm: "940px", md: "470px" }}
      >
        <Box flex="1 1 auto">
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
        <Box
          rounded="lg"
          pb={8}
          position="relative"
          bg={"blue.100"}
          // width="640px"
          // height="470px"
          flex="1 1 auto"
        >
          <br />
          <Heading
            textAlign="center"
            as="h2"
            fontSize={20}
            textTransform="capitalize"
            my={2}
            color={colorMode && "black"}
          >
            How can I join the Royals?
          </Heading>

          <Text
            textAlign="center"
            width="90%"
            rounded="lg"
            mb={2}
            mx="auto"
            color={"gray.700"}
            fontWeight="400"
          >
            Our team applications open for all John Fraser SS students at the
            beginning of each school year (around September/October). You can
            hear about us through the school announcements, and meet us in
            person at school club promo events where we usually demo our robots!
            If the deadline to apply has passed but you are still interested in
            joining, feel free to email us at jfssvex@gmail.com. We are always
            looking for dedicated members who are interested in learning about
            robotics!
          </Text>

          <br />
          <Heading
            textAlign="center"
            as="h2"
            fontSize={20}
            textTransform="capitalize"
            my={2}
            color={colorMode && "black"}
          >
            What if I don’t have any prior experience?
          </Heading>

          <Text
            textAlign="center"
            width="90%"
            rounded="lg"
            mb={2}
            mx="auto"
            color={"gray.700"}
            fontWeight="400"
          >
            Not a problem! You do not need to have prior experience with the
            competition to join the club. Many members join without any
            knowledge - VEX is a great learning experience and we are all very
            welcoming!
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Other
