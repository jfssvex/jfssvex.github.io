import { Box, Heading, SimpleGrid, Text, useColorMode } from "@chakra-ui/core"
import React from "react"
import devops from "../images/devops.svg"
const Other = () => {
  const { colorMode } = useColorMode()

  return (
    <Box px={5} width="95vw">
      <Heading as="h1" mb={5} textAlign={["left", "center"]}>
        Something Else
      </Heading>
      <br />
      <SimpleGrid columns={2} spacing={5}>
        <Box>
          <iframe
            src="https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed"
            width="640"
            height="470"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            frameborder="0"
          ></iframe>
        </Box>
        <Box
          rounded="lg"
          pb={8}
          position="relative"
          bg={"blue.100"}
          width="640px"
          height="470px"
        >
          <Box
            as="img"
            src={devops}
            pos="absolute"
            width="inherit"
            height="100%"
            opacity={0.14}
            zIndex={205}
          />

          <Heading
            textAlign="center"
            as="h2"
            fontSize={20}
            textTransform="capitalize"
            my={5}
            color={colorMode && "black"}
          >
            hedo
          </Heading>

          <Text
            py={2}
            textAlign="center"
            width="80%"
            rounded="lg"
            mb={2}
            mx="auto"
            color={"gray.700"}
            fontWeight="600"
          >
            heyo
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Other
