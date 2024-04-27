import { Button, Flex, Image, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const EmailInput = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the email address
      console.log(`Email address submitted: ${email}`);
      // Clear the input field
      setEmail("");
    };
  return (
    <Flex
    as="form" onSubmit={handleSubmit}
    mb="43px"
    maxW={"520px"}
    alignItems={"center"}
    bg="#FFFFFF"
    boxShadow={"0px 15px 30px rgba(193, 193, 193, 0.25)"}
    borderRadius="50px"
    p="10px"
  >
    <Image mx="auto" src="/mailboxoff.svg"></Image>
    <Input
      type="email"
      color="black"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      outline={"none"}
      _focusVisible={{ borderLeft: "none" }}
      border="none"
      placeholder="Apply for beta testing"
      bg="transparent"
    ></Input>
    <Button
    type="submit"
      bg="#281965"
      colorScheme={"#281965"}
      color="#FFFFFF"
      fontSize="20px"
      h="55px"
      w="143px"
      fontWeight="400"
      lineHeight={"150%"}
      p="11px 25px"
      borderRadius={"30px"}
    >
      Apply
    </Button>
  </Flex>
  )
}

export default EmailInput