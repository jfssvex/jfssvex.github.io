import React from "react"
import { Heading, Text, SimpleGrid, Image, Box } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamCard from "../components/teamCard"

const TeamPage = () => {
  const year = new Date().getFullYear() || "2020"

  return (
    <Layout heroText="JFSS Royals">
      <SEO title="Team" />
      <Box px={5} width="95vw">
        <Heading as="h2" size="xl" textAlign="center">
          Our Current Team
        </Heading>
        <br />

        <SimpleGrid columns={3} spacing={50}>
          <TeamCard
            src={require("../images/1.jpg")}
            name="Mr. Ghorvei"
            text="Mr. Ghorvei is our team's teacher superviser. Without him and the support of our school, our club wouldn't be here."
          />
          <TeamCard
            src={require("../images/Waris.jpg")}
            name="Waris Zahoor"
            text="Waris is a grade 12 student at Fraser who is thrilled to be
                  the Royals' team captain for the year. He leads the team
                  during meetings/competitions and also doubles as one of the
                  builders. He is super proud of what the team has accomplished
                  over the years! Waris is looking forward to the new season and
                  growing with the team!"
          />

          <TeamCard
            src={require("../images/Rayhaan.jpg")}
            name="Rayhaan Tanweer"
            text="Rayhaan is a Grade 12 student at JFSS. He is the Royals' lead
                  programmer and driver for this season. This is Rayhaan's third
                  year in VEX Robotics and he's eager to raise the team's
                  autonomous routines to new heights. When he's not working on
                  robotics code, he's probably just programming something else."
          />
        </SimpleGrid>

        <br />
        <SimpleGrid columns={3} spacing={50}>
          <TeamCard
            src={require("../images/Rishab.jpg")}
            name="Rishabh Tamhane"
            text="Rishabh is a Grade 12 Student, and is excited to be this
                  year's Documentation and Strategy Lead! He joined the VEX team
                  in Grade 10, and has probably attended the most meetings out
                  of all the executive members. He also likes planes. A lot."
          />
          <TeamCard
            src={require("../images/Jason.jpg")}
            name="Jason Huang"
            text="Jason is a grade 12 student, executive member, and lead
                  engineer in the Royals VEX Robotics team. He has been a part
                  of VEX from it's inception back in his grade 9 year. Outside
                  of VEX, he does software development, advocates for open
                  source software, and does some photography on the side."
          />
          <TeamCard
            src={require("../images/Karen1.jpg")}
            name="Karen Ye"
            text="Karen Ye is a Grade 12 student at John Fraser S.S. and is
                  super excited to be apart of her school's VEX Robotics team
                  this year as the media coordinator. She joined VEX this year
                  to combine her love for graphic design and photography with
                  content creation for all the club's media needs. In her free
                  time, she loves hanging out with her friends and working on
                  the yearbook."
          />
        </SimpleGrid>

        <br />
        <SimpleGrid columns={3} spacing={50}>
          <TeamCard
            src={require("../images/Mihir.jpg")}
            name="Mihir Kachroo"
            text="Mihir Kachroo is a Grade 11 student at JFSS and is thrilled to
                  be part of his school’s VEX Robotics team this year as a
                  Programmer. He joined VEX in Grade 9 because of his interests
                  in Robotics and team competitions. In his free time, he enjoys
                  art, Ultimate Frisbee and developing cool apps!"
          />
          <TeamCard
            src={require("../images/Shavaiz.png")}
            name="Shavaiz Khan"
            text="Shavaiz Khan is a Grade 11 student at JFSS, who is apart of
                  the VEX Robotics team at John Fraser, as a Programmer. He
                  participated in the team in Grade 10 and is looking to carry
                  it on forward into Grade 12. In his free time, he enjoys
                  playing video games and watching Netflix."
          />

          <TeamCard
            src={require("../images/Owen.jpg")}
            name="Owen Pan"
            text="Owen is a Grade 11 student at JFSS and is glad to be part of
                  his school’s VEX Robotics team this year as an Engineer. He
                  joined VEX in Grade 10 because of his interest in robotics and
                  the challenges of Vex. He enjoys math, science and learning
                  new stuff."
          />
        </SimpleGrid>

        <br />
        <SimpleGrid columns={3} spacing={50}>
          <TeamCard
            src={require("../images/Andy.jpg")}
            name="Andy Zhang"
            text="Hi, my name is Andy, and I'm a Grade 11 student attending
                  Fraser this year. I've been part of the VEX team since Grade 9
                  and I'm looking forward towards the upcoming year. I am a
                  engineer and I enjoy playing video games, sleeping, and
                  Youtube."
          />

          <TeamCard
            src={require("../images/Vinesh.jpg")}
            name="Vinesh Vivekanand"
            text="Vinesh is a grade 11 student at JFSS and is one of the
                  engineers for the VEX Competition Team. He has been apart of
                  VEX since grade 10 and works hard alongside his teammates to
                  create a functioning robot that can help them win
                  competitions. In his free time he likes playing a variety of
                  video games and enjoys learning and researching about new
                  electronics!"
          />

          <TeamCard
            src={require("../images/Larry.jpg")}
            name="Larry Wu"
            text="Larry Wu is a Grade 12 student at JFSS and is excited to be a
                  part of his school's VEX robotics team this year as a CAD
                  Designer. He joined VEX in Grade 11. In his free time he
                  enjoys, guitar, photography and traveling."
          />
        </SimpleGrid>
        <br />
        <SimpleGrid columns={3} spacing={50}>
          <TeamCard
            src={require("../images/curtis.jpg")}
            name="Curtis An"
            text="Curtis is a grade 12 student at JFSS. He has been a member of the JFSS Royals since grade 10 and has helped out with strategy, documentation, and generally administrative tasks with the team in past and current years. In his free time, he enjoys hanging out with friends while still complying with COVID-19 regulations of course."
          />

          <br />
          <br />
        </SimpleGrid>
      </Box>

      <Footer year={year} />
    </Layout>
  )
}

export default TeamPage
