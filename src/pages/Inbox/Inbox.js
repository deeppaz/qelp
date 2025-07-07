import React from "react";
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
export default function Inbox({ inboxInfo }) {
  if (!inboxInfo || inboxInfo.length === 0) {
    return (
      <Box textAlign="center" p={8}>
        <Text fontSize="lg" color="gray.500">
          No emails yet. Your inbox is empty.
        </Text>
      </Box>
    );
  }

  const emails = Array.isArray(inboxInfo)
    ? inboxInfo
    : typeof inboxInfo === "string"
    ? JSON.parse(inboxInfo)
    : [inboxInfo];

  return (
    <VStack spacing={4}>
      {emails.map((email, index) => (
        <Card key={index} w="100%">
          <CardHeader>
            <Heading size="md">{email?.subject || "No Subject"}</Heading>
            <Text fontSize="sm" color="gray.600">
              From: {email?.from || "Unknown"}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {email?.date ? new Date(email.date * 1000).toLocaleString() : "No date"}
            </Text>
          </CardHeader>
          <CardBody>
            <Text>{email?.body || "No content"}</Text>
          </CardBody>
        </Card>
      ))}
    </VStack>
  );
}
