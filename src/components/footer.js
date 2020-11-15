import React from "react"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/core"

function Footer({ data, year }) {
  return (
    <Flex
      as="footer"
      h={20}
      justifyContent="center"
      borderTop="1px"
      borderColor="gray.200"
      alignItems="center"
    >
      <SimpleGrid columns={3} spacing={10}>
        <Box as="span">
          <Text style={{ textAlign: "left", alignSelf: "stretch" }}>
            JFSS Vex
          </Text>
        </Box>
        <Box>Built by Vex Robotics Team ©{year}</Box>
        <Box>
          <a href="https://www.instagram.com/jfss_royals/">
            <Text style={{ textAlign: "right", alignSelf: "stretch" }}>
              Instagram
            </Text>
          </a>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}

export default Footer
