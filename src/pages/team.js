import React from "react"
import { Heading, SimpleGrid, Box } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamCard from "../components/teamCard"
import { useStaticQuery } from "gatsby"

const TeamPage = () => {
  const pictures = useStaticQuery(graphql`
    query {
      MrGhorvei: file(relativePath: { eq: "MrGhorvei_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Waris: file(relativePath: { eq: "Waris_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Rayhaan: file(relativePath: { eq: "Rayhaan_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Rishab: file(relativePath: { eq: "Rishab_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Jason: file(relativePath: { eq: "Jason_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Karen: file(relativePath: { eq: "Karen1.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Mihir: file(relativePath: { eq: "Mihir.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Shavaiz: file(relativePath: { eq: "Shavaiz.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Owen: file(relativePath: { eq: "Owen.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Andy: file(relativePath: { eq: "Andy.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Vinesh: file(relativePath: { eq: "Vinesh.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Larry: file(relativePath: { eq: "Larry_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      Curtis: file(relativePath: { eq: "Curtis_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

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
            gatsbyImgSrc={pictures.MrGhorvei.childImageSharp.fixed}
            name="Mr. Ghorvei"
            text="Mr. Ghorvei is a tech teacher at John Fraser Secondary School. He is also our team's amazing teacher superviser. He gives us space to host meetings, get funding for new parts and without him and the support of our school, our club wouldn't be here."
          />
          <TeamCard
            gatsbyImgSrc={pictures.Waris.childImageSharp.fixed}
            name="Waris Zahoor"
            text="Waris is a grade 12 student at Fraser who is thrilled to be
                  the Royals' team captain for the year. He leads the team
                  during meetings/competitions and also doubles as one of the
                  builders. He is super proud of what the team has accomplished
                  over the years! Waris is looking forward to the new season and
                  growing with the team!"
          />

          <TeamCard
            gatsbyImgSrc={pictures.Rayhaan.childImageSharp.fixed}
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
            gatsbyImgSrc={pictures.Rishab.childImageSharp.fixed}
            name="Rishabh Tamhane"
            text="Rishabh is a Grade 12 Student, and is excited to be this
                  year's Documentation and Strategy Lead! He joined the VEX team
                  in Grade 10, and has probably attended the most meetings out
                  of all the executive members. He also likes planes. A lot."
          />
          <TeamCard
            gatsbyImgSrc={pictures.Jason.childImageSharp.fixed}
            name="Jason Huang"
            text="Jason is a grade 12 student, executive member, and lead
                  engineer in the Royals VEX Robotics team. He has been a part
                  of VEX from it's inception back in his grade 9 year. Outside
                  of VEX, he does software development, advocates for open
                  source software, and does some photography on the side."
          />
          <TeamCard
            gatsbyImgSrc={pictures.Karen.childImageSharp.fixed}
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
            gatsbyImgSrc={pictures.Mihir.childImageSharp.fixed}
            name="Mihir Kachroo"
            text="Mihir Kachroo is a Grade 11 student at JFSS and is thrilled to
                  be part of his school’s VEX Robotics team this year as a
                  Programmer. He joined VEX in Grade 9 because of his interests
                  in Robotics and team competitions. In his free time, he enjoys
                  art, Ultimate Frisbee and developing cool apps!"
          />
          <TeamCard
            gatsbyImgSrc={pictures.Shavaiz.childImageSharp.fixed}
            name="Shavaiz Khan"
            text="Shavaiz Khan is a Grade 11 student at JFSS, who is apart of
                  the VEX Robotics team at John Fraser, as a Programmer. He
                  participated in the team in Grade 10 and is looking to carry
                  it on forward into Grade 12. In his free time, he enjoys
                  playing video games and watching Netflix."
          />

          <TeamCard
            gatsbyImgSrc={pictures.Owen.childImageSharp.fixed}
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
            gatsbyImgSrc={pictures.Andy.childImageSharp.fixed}
            name="Andy Zhang"
            text="Hi, my name is Andy, and I'm a Grade 11 student attending
                  Fraser this year. I've been part of the VEX team since Grade 9
                  and I'm looking forward towards the upcoming year. I am a
                  engineer and I enjoy playing video games, sleeping, and
                  Youtube."
          />

          <TeamCard
            gatsbyImgSrc={pictures.Vinesh.childImageSharp.fixed}
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
            gatsbyImgSrc={pictures.Larry.childImageSharp.fixed}
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
            gatsbyImgSrc={pictures.Curtis.childImageSharp.fixed}
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
