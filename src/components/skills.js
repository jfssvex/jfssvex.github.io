import { Box, Heading, SimpleGrid, Text, useColorMode } from "@chakra-ui/core"
import React from "react"
import { skillTypes } from "../data/data"

const Skills = () => {
  const { colorMode } = useColorMode()
  const types = Object.keys(skillTypes)

  return (
    <Box px={5} width="95vw">
      <Heading as="h1" mb={5} textAlign={["left", "center"]}>
        Team Roles
      </Heading>
      <br />
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={5}>
        {types.map((type, key) => (
          <Box
            rounded="lg"
            pb={8}
            key={type}
            position="relative"
            bg={skillTypes[type].color + ".100"}
            zIndex={206}
          >
            <Heading
              textAlign="center"
              as="h2"
              fontSize={20}
              textTransform="capitalize"
              my={5}
              color={colorMode && "black"}
            >
              {type}
            </Heading>

            {skillTypes[type].skills.map(item => (
              <Text
                py={2}
                textAlign="center"
                width="80%"
                rounded="lg"
                mb={2}
                mx="auto"
                color={"gray.700"}
                fontWeight="600"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Skills
