import {
  Container,
  VStack,
  Box,
  Flex,
  Spacer,
  Button,
  Input,
  Heading,
  Text,
  Divider
} from "@chakra-ui/react";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <VStack>
        <Container maxW="container.xl" h="container.xl">
          <Box bg="#f1f1f1" w="100%" pt="12" pl="100" pr="100" pb="24" borderRadius="3xl">
            <Flex>
              <Box p="4">
                <Heading size="xl" fontSize="50px" color="#e56e24">
                Your Email
                </Heading>
              </Box>
              <Spacer />
              <Box p="4">
                <Button mr="4" color="white" backgroundColor="#e56e24">
                  {" "}
                  Copy Email
                </Button>
                <Button color="white" backgroundColor="#e56e24"> Saved Email</Button>
              </Box>
            </Flex>
            <Input backgroundColor="#d9d9d9" placeholder="Your Email" h="16" borderRadius="3xl"/>
          </Box>
          <Box mt="14" bg="#f1f1f1" w="100%" pt="12" pl="100" pr="100" pb="24" borderRadius="3xl">
            <Heading size="xl" fontSize="50px" color="#e56e24" mb="12" textAlign={"center"}>
              Inbox
            </Heading>
            <Input backgroundColor="#d9d9d9"  h="16" borderRadius="3xl"/>

          </Box>
          <Divider orientation='horizontal' mt="12" mb="20" />
          <Heading size="xl" fontSize="50px" color="#e56e24" mb="4"  textAlign={"center"}>
            About qelp
          </Heading>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </Container>
      </VStack>
    </Fragment>
  );
}
