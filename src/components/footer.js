import React from "react"
import { Box, Flex } from "@chakra-ui/core"

function Footer({ data, year }) {
  return (
    <Flex
      as="footer"
      h={24}
      justifyContent="center"
      borderTop="1px"
      borderColor="gray.200"
      alignItems="center"
      flexDirection="column"
    >
      <Box as="span">
        Built with{" "}
        <span role="img" aria-label="love">
          ❤️{" "}
        </span>{" "}
        by Vex Robotics Team ©{year}
      </Box>
    </Flex>
  )
}

export default Footer
