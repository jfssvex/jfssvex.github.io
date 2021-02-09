import React from "react"

import { Heading, Text, SimpleGrid, Image, Box } from "@chakra-ui/core"
import Img from "gatsby-image"

var TeamCard = ({ gatsbyImgSrc, name, text }) => {
  return (
    <Box rounded="lg" p={4} position="relative" bg={"blue.100"}>
      <SimpleGrid columns={2} spacing={1}>

        <Img
          width="150px"
          height="150px"
          objectFit="cover"
          style={{borderRadius: "150px"}}
          alt={name}
          fixed={gatsbyImgSrc}
        />

        <Box width="275px">
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Text fontSize="xs">{text}</Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default TeamCard
