import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text, Center, Image, SimpleGrid } from "@chakra-ui/core"

import { Box } from "@chakra-ui/core"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HistoryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const year = new Date().getFullYear() || "2020"

  return (
    <Layout heroText="JFSS Royals">
      <SEO title="History" />
      {/* <h1>Hi people</h1> */}
      <Center>
        <Box px={5} width="70vw">
          <br />
          <Heading as="h2" size="lg" style={{ textAlign: "center" }}>
            Royals Timeline
          </Heading>
          <br />
          <br />
          <Heading as="h3" size="md">
            2017/18 In the Zone
          </Heading>
          <Text fontSize="sm">
            Our club began in the 2017/18 In the Zone challenge, with our only
            team being 82050A. We received funding from our school, John Fraser
            SS, to purchase our first Cortex system, and found space in one of
            our technology classrooms to hold meetings. This room became our
            home for years to come! <br />
            <br />
            Almost everyone was new to VEX, which made the year a great learning
            opportunity. With a total of 6 members, we were able to build a
            robot during lunch breaks and after school sessions thanks to our
            amazing teacher supervisors (Ms. McEwen and Mr. Lightbody). After
            the holidays, our first robot was ready to compete.
            <br />
            <br />
            With the robot complete, the team was able to attend our first
            competition, the iDesign Central Toronto Qualifying event. We won 3
            out of 7 matches, ranking 30th out of 60 teams - a great learning
            experience once again! We were unable to attend our other registered
            event, and with that, our season came to a close. <br />
            <br />
            Many of our members graduated that year, leaving 2 to continue with
            the team. As such, the team had to expand and rebuild the following
            year.
          </Text>
          <br />
          <SimpleGrid columns={2} spacing={50}>
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/uno.png")}
              alt="history"
            />
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/dos.png")}
              alt="history"
            />
          </SimpleGrid>
          <br />
          <Heading as="h3" size="md">
            2018/19 Turning Point
          </Heading>
          <Text fontSize="sm">
            Turning Point was our second season in competition, and we brought
            on several new members at the beginning of this year, many of whom
            are still on the team today. Once again, we only had one team
            (82050A), and the season was a great learning opportunity for all
            members. <br />
            <br />
            This year we kept a similar schedule for our meetings with our
            teacher supervisors, but were also able to take it home over our
            winter holidays to work on it while school was off. Our strategist
            Rishabh and his family were gracious enough to host meetings at
            their home so we were able to get even more hands on working time
            with the robot than in the first year. <br />
            <br />
            We competed in two events in February: the Brampton Robotics VRC
            Qualifying event, and the iDesign Central Toronto VRC Qualifying
            Event. Unfortunately, we were not able to win any matches at our
            first event in Brampton but we took the time until the next
            competition to make improvements, leading to our first ever
            elimination selection at Central Toronto.
            <br />
            <br /> This being the first season for the majority of our team
            members, it was a great formative experience. We learned a lot about
            the robotics design process and were eager to continue improving
            into the next season.
          </Text>
          <br />
          <SimpleGrid columns={2} spacing={50}>
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/tres.png")}
              alt="history"
              height="360px"
            />
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/quatros.png")}
              alt="history"
              height="350px"
            />
          </SimpleGrid>
          <br />
          <Heading as="h3" size="md">
            2019/20 Tower Takeover
          </Heading>
          <Text fontSize="sm">
            A lot of things changed for our club during the Tower Takeover
            season. Our school was able to fund the purchase of a V5 system,
            giving our team new technology to build our robots after competing
            in the last season with cortex. This was also the inaugural season
            for our second team, 82050B. As such, both 82050A and 82050B were
            going to compete. Once again, we were able to run thanks to our
            amazing teacher supervisors: Ms. McEwen and Mr. Lightbody.
            <br />
            <br /> With a better understanding of the design process, our older
            members were able to teach new members based on their experiences.
            This allowed us to run teaching sessions so that knowledge could be
            passed on. Both teams were able to CAD their robots and iteratively
            improve in order to be successful.
            <br />
            <br /> With both teams working throughout the season on their bots,
            we were able to compete at multiple competitions. Both teams
            competed at Appleby College event, with 82050A also competing at the
            St. Catherines regional and Collingwood qualifier. Due to their
            skills score, 82050A was able to qualify for the Ontario Provincial
            Championship, with it being the first time the school club had
            attended.
            <br />
            <br /> After further refining of the bot, 82050A competed at the
            Provincial championship and won 5/7 qualifying matches. As such,
            they successfully made it to eliminations! After a great run, the
            team lost a close match in the R-16 round, meaning that the season
            had come to an end.
            <br />
            <br /> This season was an amazing experience for all members, being
            the most successful year so far. Our members were more excited than
            ever for the new season.
          </Text>
          <br />
          <SimpleGrid columns={2} spacing={50}>
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/ballin.png")}
              alt="history"
              height="360px"
            />
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/teamB.png")}
              alt="history"
              height="350px"
            />
          </SimpleGrid>
          <br />
          <Heading as="h3" size="md">
            2020/21 Change Up
          </Heading>
          <Text fontSize="sm">
            With the COVID-19 pandemic still ongoing, the Change Up season has
            been very different for us. We were unable to have run both teams
            due to gathering restrictions, so only 82050A will be competing this
            year. Instead, our senior members are using the time to teach new
            members the fundamentals of building, programming, and the design
            process so that they are better equipped for the next year, while
            simultaneously building a robot for 82050A. Our team is also very
            thankful for our new teacher supervisor, Mr. Ghorvei, who has been
            hosting socially-distanced meetings for us in the tech classrooms of
            our school where we have been working on building a DIY perimeter
            kit. <br />
            <br />
            Until this season, we had gotten by without one, but due to the
            online nature of most competitions this year, our team needed a
            perimeter in order to record and post skills runs. With funding from
            our school and an enormous amount of help from Mr. Ghorvei, we were
            able to build a functional perimeter out of wooden planks that
            satisfy REC requirements. Now we can compete in online events as
            well as practice skills in a proper environment. <br />
            <br />
            To make sure we were ready for competitions, our dedicated team
            members on 82050A brought the parts and tools home with them and
            worked on their own time to build and program a high quality robot.
            After passing the robot from person to person, to make sure many
            people can get involved while still adhering to COVID-19 guidelines,
            we’ve built what we believe to be the best robot in our program
            history. We are incredibly excited to compete in the coming weeks,
            whether online or physically. <br />
            <br />
            82050A is currently registered to compete in an in-person
            skills-only event on December 12, 2020 (the Caution Tape Classic),
            and an online skills competition (Maple Leaf Qualifying) on January
            14.
          </Text>
          <br />
          <SimpleGrid columns={2} spacing={50}>
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/whatever5is.png")}
              alt="history"
              height="360px"
            />
            <Image
              width="48vw"
              objectFit="cover"
              src={require("../images/whatever6is.png")}
              alt="history"
              height="350px"
            />
          </SimpleGrid>
        </Box>
      </Center>

      <br />
      <br />

      <center>
        <Footer data={data} year={year} />
      </center>
    </Layout>
  )
}

export default HistoryPage
