import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/core"
import { Grid, GridItem } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ModelPage = () => {
    return (
        <Layout heroText="JFSS Royals">
            <SEO title="CAD Robot Models" />

            <Center>
                <Box>
                    <Heading as="h1" size="lg" style={{ textAlign: "center" }}>
                        CAD Robot Models
                    </Heading>
                    <Text style={{ textAlign: "center" }}>
                        Here, you'll find all the CAD models that we've designed.
                    </Text>
                </Box>
            </Center>

            <br />


            <Center>
                <Grid
                    height="30vw" width="80vw"
                    gap={4}
                >
                    <GridItem colSpan={4}>
                        <Box width="100%" height="100%">
                            <iframe
                                title="3D Model"
                                src="https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed"
                                width="100%"
                                height="100%"
                                allowfullscreen="true"
                                webkitallowfullscreen="true"
                                alt="3D Model"
                                mozallowfullscreen="true"
                                frameborder="0"
                            ></iframe>
                        </Box>
                    </GridItem>

                    <GridItem colStart={4} colEnd={6}>
                        <Box borderRadius="lg" bg={"blue.100"} width="100%" height="100%">
                            <Heading as="h3" size="lg" style={{ textAlign: "center" }} py={5}>
                                VEX Change Up Season
                            </Heading>
                            <Text style={{ textAlign: "center" }}>
                                Hello world!
                                { /* BUG: If you add enough text, it takes up more space than it needs. */ }
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Center>
        </Layout>
    );
}

export default ModelPage;