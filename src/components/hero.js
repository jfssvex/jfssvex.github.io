import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "@chakra-ui/core"

const Hero = ({ image, text }) => {
  return (
    <Box position="relative" textAlign="center">
      <Img
        alt="Image"
        fluid={image.childImageSharp.fluid}
        style={{ filter: `brightness(0.4)` }}
      />
      <Heading
        as="h1"
        size="2xl"
        color="white"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {text}
      </Heading>
    </Box>
  )
}

export default Hero
