import React, { Fragment, useEffect, useState } from "react";
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
  Divider,
  useToast,
} from "@chakra-ui/react";
import qelpServices from "../../services/services";

export default function Home() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [generateRandomEmail, setGenerateRandomEmail] = useState(
    "t29xcqyntz@vjuum.com"
  );
  const [currentEmailInfo, setCurrenEmailInfo] = useState([]);

  useEffect(() => {
    // generateRandomEmails();
    handleInbox();
  }, []);

  const generateRandomEmails = () => {
    qelpServices
      .generateRandomEmailAddresses({ count: 1 })
      .then((res) => {
        setLoading(true);
        res.data.forEach((element) => {
          setGenerateRandomEmail(element);
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInbox = () => {
    var currentMail = generateRandomEmail.split("@");
    qelpServices
      .getMailBox({ username: currentMail[0], domain: currentMail[1] })
      .then((res) => {
        setLoading(true);
        res.data.forEach((element) => {
          setCurrenEmailInfo(element);
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateRandomEmail).then(
      () =>
        toast({
          title: "Copied Successfully.",
          description: generateRandomEmail + " Copied",
          status: "success",
          duration: 2000,
          isClosable: true,
        }),
      (err) => console.error("Could not copy text: ", err)
    );
  };

  const saveEmailsToStorage = () => {
    localStorage.setItem("emails", generateRandomEmail);
    toast({
      title: "Saved Successfully.",
      description:
        generateRandomEmail + " saved, now you can go to Saved Emails page",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Fragment>
      <VStack>
        <Container maxW="container.xl" h="container.xl">
          <Box
            bg="#f1f1f1"
            w="100%"
            pt="12"
            pl="100"
            pr="100"
            pb="24"
            borderRadius="3xl"
          >
            <Flex>
              <Box p="4">
                <Heading size="xl" fontSize="50px" color="#e56e24">
                  Your Email
                </Heading>
              </Box>
              <Spacer />
              <Box p="4">
                <Button
                  mr="4"
                  color="white"
                  backgroundColor="#e56e24"
                  onClick={copyToClipboard}
                >
                  Copy Email
                </Button>
                <Button
                  color="white"
                  backgroundColor="#e56e24"
                  onClick={saveEmailsToStorage}
                >
                  {" "}
                  Save Email
                </Button>
              </Box>
            </Flex>
            {!loading ? (
              <Input
                backgroundColor="#d9d9d9"
                placeholder={generateRandomEmail}
                h="16"
                borderRadius="3xl"
                readOnly
              />
            ) : (
              "..."
            )}
          </Box>
          <Box
            mt="14"
            bg="#f1f1f1"
            w="100%"
            pt="12"
            pl="100"
            pr="100"
            pb="24"
            borderRadius="3xl"
          >
            <Heading
              size="xl"
              fontSize="50px"
              color="#e56e24"
              mb="12"
              textAlign={"center"}
            >
              Inbox
            </Heading>
            {!loading ? (
              <Input backgroundColor="#d9d9d9" h="16" borderRadius="3xl" />
            ) : (
              "..."
            )}
          </Box>
          <Divider orientation="horizontal" mt="12" mb="20" />
          <Heading
            size="xl"
            fontSize="50px"
            color="#e56e24"
            mb="4"
            textAlign={"center"}
          >
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
