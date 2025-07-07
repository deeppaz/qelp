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
import Inbox from "../Inbox/Inbox";

export default function Home() {
  const generatedEmail = localStorage.getItem("generatedEmail");
  const generatedEmailInfo = localStorage.getItem("generatedEmailInfo");
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [generateRandomEmail, setGenerateRandomEmail] = useState(generatedEmail);
  const [currentEmailInfo, setCurrenEmailInfo] = useState([]);
  const [allEmails, setAllEmails] = useState(JSON.parse(localStorage.getItem("allEmails") || "[]"));

  useEffect(() => {
    const emailCreatedAt = localStorage.getItem("emailCreatedAt");
    const oneHour = 60 * 60 * 1000;
    
    if (emailCreatedAt && Date.now() - parseInt(emailCreatedAt) > oneHour) {
      localStorage.removeItem("generatedEmail");
      localStorage.removeItem("emailToken");
      localStorage.removeItem("allEmails");
      localStorage.removeItem("generatedEmailInfo");
      localStorage.removeItem("emailCreatedAt");
      generateRandomEmails();
    } else if (!generatedEmail) {
      generateRandomEmails();
    } else {
      console.log("email already generated");
    }
    
    if (!generatedEmailInfo) {
      handleInbox();
    } else {
      console.log("email info listed");
    }
  }, []);
  console.log(currentEmailInfo);
  const generateRandomEmails = () => {
    setLoading(true);
    qelpServices
      .generateRandomEmailAddresses()
      .then((inbox) => {
        setGenerateRandomEmail(inbox.address);
        localStorage.setItem("generatedEmail", inbox.address);
        localStorage.setItem("emailToken", inbox.token);
        localStorage.setItem("emailCreatedAt", Date.now().toString());
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const handleInbox = () => {
    console.log("Refresh button clicked!");
    const token = localStorage.getItem("emailToken");
    if (!token) return;
    setLoading(true);
    qelpServices
      .getMailBox(token)
      .then((emails) => {
        if (!emails) {
          console.log("Email address has expired!");
          setCurrenEmailInfo([]);
        } else {
          // Yeni email'leri mevcut email'lerle birleştir
          const newEmails = emails.filter(email => 
            !allEmails.some(existing => existing.date === email.date && existing.from === email.from)
          );
          const updatedEmails = [...allEmails, ...newEmails];
          setAllEmails(updatedEmails);
          setCurrenEmailInfo(updatedEmails);
          localStorage.setItem("allEmails", JSON.stringify(updatedEmails));
          localStorage.setItem("generatedEmailInfo", JSON.stringify(updatedEmails));
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const copyToClipboard = () => {
    console.log("Copy button clicked!", generateRandomEmail);
    console.log("Copy button clicked!", generateRandomEmail);
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
    console.log("Save button clicked!", generateRandomEmail);
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
            pt={["6", "12"]}
            pl={["4", "8", "100"]}
            pr={["4", "8", "100"]}
            pb={["12", "24"]}
            borderRadius="3xl"
          >
            <Flex direction={["column", "row"]} align={["center", "flex-start"]}>
              <Box p="4" textAlign={["center", "left"]}>
                <Heading size="xl" fontSize={["30px", "40px", "50px"]} color="#e56e24">
                  Your Email
                </Heading>
              </Box>
              <Spacer />
              <Box p="4">
                <Button
                  mr={["0", "4"]}
                  mb={["2", "0"]}
                  color="white"
                  backgroundColor="#e56e24"
                  onClick={copyToClipboard}
                  size={["sm", "md"]}
                  _hover={{ backgroundColor: "#d45a1f", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Copy Email
                </Button>
                <Button
                  color="white"
                  backgroundColor="#e56e24"
                  onClick={saveEmailsToStorage}
                  size={["sm", "md"]}
                  _hover={{ backgroundColor: "#d45a1f", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
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
                border={"none"}
                fontSize={["lg", "2xl", "3xl"]}
                fontWeight="bold"
                cursor="pointer"
                onClick={copyToClipboard}
              />
            ) : (
              "..."
            )}
          </Box>
          <Box
            mt={["8", "14"]}
            bg="#f1f1f1"
            w="100%"
            pt={["6", "12"]}
            pl={["4", "8", "100"]}
            pr={["4", "8", "100"]}
            pb={["12", "24"]}
            borderRadius="3xl"
          >
            <Flex mb={["6", "12"]} direction={["column", "row"]} align="center">
              <Heading
                size="xl"
                fontSize={["30px", "40px", "50px"]}
                color="#e56e24"
                textAlign="center"
                flex="1"
                mb={["4", "0"]}
              >
                Inbox
              </Heading>
              <Button
                color="white"
                backgroundColor="#e56e24"
                onClick={handleInbox}
                isLoading={loading}
                size={["sm", "md"]}
                _hover={{ backgroundColor: "#d45a1f", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Refresh
              </Button>
            </Flex>
            {!loading ? (
              <Inbox
                inboxInfo={allEmails.length > 0 ? allEmails : JSON.parse(generatedEmailInfo || '[]')}
              />
            ) : (
              <Text textAlign="center">Loading emails...</Text>
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
