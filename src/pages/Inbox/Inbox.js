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
  console.log();
  let content = JSON.parse(inboxInfo);
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md"> {content?.subject}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                {content?.subject}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
