import React, { Fragment } from "react";
import {
  Box,
  Spacer,
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  return (
    <Fragment>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        px={["4", "8", "20"]}
        py={["2", "3"]}
        direction={["column", "row"]}
      >
        <Box p={["2", "5"]} mb={["2", "0"]}>
          <Link to="/">
            <Heading
              size="xl"
              fontSize={["30px", "40px", "50px"]}
              color="#e56e24"
            >
              qelp
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap={["2", "6"]} flexWrap="wrap">
          <Link to="/emails">
            <Button
              size={["sm", "lg"]}
              backgroundColor="#e56e24"
              color="white"
              _hover={{ backgroundColor: "#d45a1f", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              Saved Emails
            </Button>
          </Link>
          <Link to="https://github.com/deeppaz/qelp">
            <Button
              size={["sm", "lg"]}
              backgroundColor="#e56e24"
              color="white"
              _hover={{ backgroundColor: "#d45a1f", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              GitHub
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Fragment>
  );
}
