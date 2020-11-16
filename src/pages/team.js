import React from "react"
import { Heading, Text, SimpleGrid, Image } from "@chakra-ui/core"
import { Box } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"

const TeamPage = () => {
  const year = new Date().getFullYear() || "2020"

  return (
    <Layout heroText="JFSS Royals">
      <Box px={5} width="95vw">
        <Heading as="h2" size="xl" textAlign="center">
          Our Current Team
        </Heading>
        <br />
        <SimpleGrid columns={3} spacing={50}>
          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Waris.jpg")}
                alt="Waris Zahoor"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Waris Zahoor
                </Heading>
                <Text fontSize="xs">
                  Waris is a grade 12 student at Fraser who is thrilled to be
                  the Royals' team captain for the year. He leads the team
                  during meetings/competitions and also doubles as one of the
                  builders. He is super proud of what the team has accomplished
                  over the years! Waris is looking forward to the new season and
                  growing with the team!
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Rayhaan.jpg")}
                alt="Rayhaan Tanweer"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Rayhaan Tanweer
                </Heading>
                <Text fontSize="xs">
                  Rayhaan is a Grade 12 student at JFSS. He is the Royals' lead
                  programmer and driver for this season. This is Rayhaan's third
                  year in VEX Robotics and he's eager to raise the team's
                  autonomous routines to new heights. When he's not working on
                  robotics code, he's probably just programming something else.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Jason.jpg")}
                alt="Jason Huang"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Jason Huang
                </Heading>
                <Text fontSize="xs">
                  Jason is a grade 12 student, executive member, and lead
                  engineer in the Royals VEX Robotics team. He has been a part
                  of VEX from it's inception back in his grade 9 year. Outside
                  of VEX, he does software development, advocates for open
                  source software, and does some photography on the side.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <br />
        <SimpleGrid columns={3} spacing={50}>
          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Rishab.jpg")}
                alt="Rishabh Tamhane"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Rishabh Tamhane
                </Heading>
                <Text fontSize="xs">
                  Rishabh is a Grade 12 Student, and is excited to be this
                  year's Documentation and Strategy Lead! He joined the VEX team
                  in Grade 10, and has probably attended the most meetings out
                  of all the executive members. He also likes planes. Alot.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Larry.jpg")}
                alt="Larry Wu"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Larry Wu
                </Heading>
                <Text fontSize="xs">
                  Larry Wu is a Grade 12 student at JFSS and is excited to be a
                  part of his school's VEX robotics team this year as a CAD
                  Designer. He joined VEX in Grade 11. In his free time he
                  enjoys, guitar, photography and traveling.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Karen.jpg")}
                alt="Jason Huang"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Karen Ye
                </Heading>
                <Text fontSize="xs">
                  Karen Ye is a Grade 12 student at John Fraser S.S. and is
                  super excited to be apart of her school's VEX Robotics team
                  this year as the media coordinator. She joined VEX this year
                  to combine her love for graphic design and photography with
                  content creation for all the club's media needs. In her free
                  time, she loves hanging out with her friends and working on
                  the yearbook.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <br />
        <SimpleGrid columns={3} spacing={50}>
          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Mihir.jpg")}
                alt="Mihir Kachroo"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Mihir Kachroo
                </Heading>
                <Text fontSize="xs">
                  Mihir Kachroo is a Grade 11 student at JFSS and is thrilled to
                  be part of his school’s VEX Robotics team this year as a
                  Programmer. He joined VEX in Grade 9 because of his interests
                  in Robotics and team competitions. In his free time, he enjoys
                  art, Ultimate Frisbee and developing cool apps!
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Shavaiz.png")}
                alt="Shavaiz Khan"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Shavaiz Khan
                </Heading>
                <Text fontSize="xs">
                  Shavaiz Khan is a Grade 11 student at JFSS, who is apart of
                  the VEX Robotics team at John Fraser, as a Programmer. He
                  participated in the team in Grade 10 and is looking to carry
                  it on forward into Grade 12. In his free time, he enjoys
                  playing video games and watching Netflix.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Owen.jpg")}
                alt="Owen Pan"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Owen Pan
                </Heading>
                <Text fontSize="xs">
                  Owen is a Grade 11 student at JFSS and is glad to be part of
                  his school’s VEX Robotics team this year as an Engineer. He
                  joined VEX in Grade 10 because of his interest in robotics and
                  the challenges of Vex. He enjoys math, science and learning
                  new stuff.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <br />
        <SimpleGrid columns={3} spacing={50}>
          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Andy.jpg")}
                alt="Andy Zhang"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Andy Zhang
                </Heading>
                <Text fontSize="xs">
                  Hi, my name is Andy, and I'm a Grade 11 student attending
                  Fraser this year. I've been part of the VEX team since Grade 9
                  and I'm looking forward towards the upcoming year. I am a
                  engineer and I enjoy playing video games, sleeping, and
                  Youtube.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box rounded="lg" pb={8} position="relative" bg={"blue.100"}>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={require("../images/Vinesh.jpg")}
                alt="Vinesh Vivekanand"
              />
              <Box width="275px">
                <Heading as="h4" size="md">
                  Vinesh Vivekanand
                </Heading>
                <Text fontSize="xs">
                  Vinesh is a grade 11 student at JFSS and is one of the
                  engineers for the VEX Competition Team. He has been apart of
                  VEX since grade 10 and works hard alongside his teammates to
                  create a functioning robot that can help them win
                  competitions. In his free time he likes playing a variety of
                  video games and enjoys learning and researching about new
                  electronics!
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <br />
        </SimpleGrid>
      </Box>

      <Footer year={year} />
    </Layout>
  )
}

export default TeamPage
