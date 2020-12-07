import React from "react"

import { Heading, Text, SimpleGrid, Image, Box } from "@chakra-ui/core"

var TeamCard = ({src, name, text}) => {
  return (
    <Box rounded="lg" p={4} position="relative" bg={"blue.100"}>
      <SimpleGrid columns={2} spacing={1}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={src}
          alt={name}
          objectFit="cover"
        />
        <Box width="275px">
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Text fontSize="xs">
            {text}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default TeamCard
