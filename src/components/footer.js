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
      <SimpleGrid columns={3} spacing={8}>
        <Box as="span">
          <a href="mailto: jfssvex@gmail.com">
            <Text style={{ textAlign: "left", alignSelf: "stretch" }}>
              jfssvex@gmail.com
            </Text>
          </a>
        </Box>
        <Box>Built with ReactJS & ChakraUI ©{year}</Box>
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
