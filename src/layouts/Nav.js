import React, { Fragment } from "react";
import {
  Box,
  Spacer,
  Flex,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export default function Nav() {
  return (
    <Fragment>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Box p="5">
          <Heading size="xl" fontSize="50px" color="#e56e24">qelp</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="6">
          <Button colorScheme="teal" size={"lg"} backgroundColor="#e56e24">Github</Button>
          <Button colorScheme="teal" size={"lg"} backgroundColor="#e56e24">Saved Emails</Button>
        </ButtonGroup>
      </Flex>
    </Fragment>
  );
}
