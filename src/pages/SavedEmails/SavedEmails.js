import React, { Fragment } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  VStack,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function SavedEmails() {
  const emails = localStorage.getItem("emails");
  console.log(emails);
  return (
    <Fragment>
      <VStack>
        <Container maxW="container.xl" h="xl">
          <Box
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
              fontSize="30px"
              color="#e56e24"
              textAlign={"center"}
              mb="12"
            >
              Saved Emails
            </Heading>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Emails</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{emails}</Td>
                    <Td>
                      {emails ? (
                        <Button onClick={localStorage.removeItem("emails")}>
                          Delete
                        </Button>
                      ) : (
                        ""
                      )}
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Emails</Th>
                    <Th>Action</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </VStack>
    </Fragment>
  );
}
