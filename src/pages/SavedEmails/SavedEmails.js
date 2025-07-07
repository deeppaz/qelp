import React, { Fragment, useState } from "react";
import {
  Container,
  VStack,
  Box,
  Heading,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function SavedEmails() {
  const [emails, setEmails] = useState(localStorage.getItem("emails"));
  
  const deleteEmail = () => {
    localStorage.removeItem("emails");
    setEmails(null);
  };
  return (
    <Fragment>
      <VStack>
        <Container maxW="container.xl" minH="70vh">
          <Box
            bg="#f1f1f1"
            w="100%"
            pt={["6", "12"]}
            pl={["4", "8", "100"]}
            pr={["4", "8", "100"]}
            pb={["12", "24"]}
            borderRadius="3xl"
          >
            <Heading
              size="xl"
              fontSize={["24px", "30px"]}
              color="#e56e24"
              textAlign="center"
              mb={["6", "12"]}
            >
              Saved Emails
            </Heading>
            {emails ? (
              <Box bg="white" p={["4", "6"]} borderRadius="xl" boxShadow="md">
                <Flex direction={["column", "row"]} justify="space-between" align={["start", "center"]}>
                  <Box mb={["4", "0"]}>
                    <Text fontSize={["md", "lg"]} fontWeight="bold" color="gray.700">
                      Email Address:
                    </Text>
                    <Text fontSize={["sm", "md"]} color="gray.600" wordBreak="break-all">
                      {emails}
                    </Text>
                  </Box>
                  <Button 
                    backgroundColor="#e53e3e"
                    color="white"
                    onClick={deleteEmail}
                    size={["sm", "md"]}
                    _hover={{ backgroundColor: "#c53030", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                  >
                    Delete
                  </Button>
                </Flex>
              </Box>
            ) : (
              <Box textAlign="center" py={["8", "12"]}>
                <Text fontSize={["lg", "xl"]} color="gray.500">
                  No saved emails yet
                </Text>
                <Text fontSize={["sm", "md"]} color="gray.400" mt="2">
                  Save an email from the home page to see it here
                </Text>
              </Box>
            )}
          </Box>
        </Container>
      </VStack>
    </Fragment>
  );
}
