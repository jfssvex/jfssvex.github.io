import React from "react"
import {
  Heading,
  Box,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core"
import emailjs from "emailjs-com"

export default class ContactForm extends React.Component {
  render() {
    function sendEmail(e) {
      e.preventDefault()

      emailjs
        .sendForm(
          "service_7fvgwqf",
          "template_vwtrhbo",
          e.target,
          "user_5ER6plW1UcDspryz51fCw"
        )
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          }
        )
    }

    return (
      <div>
      <Heading as="h1" mb={5} textAlign={["left", "center"]}>
          Contact Us
        </Heading>
        <br />

        <center>
          <Box padding="8" bg="blue.100" width="92vw" centerContent>
            <form className="contact-form" onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input name="name" placeholder="Enter your full name" />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input name="email" placeholder="Enter your email" />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Input
                  name="message"
                  height="250px"
                  placeholder="Enter message"
                />
              </FormControl>
              <br />
              <br />

              <Button
                height="48px"
                width="200px"
                type="submit"
                value="Send"
              >
                Submit
              </Button>
            </form>
          </Box>
        </center>
      </div>
    )
  }
}
