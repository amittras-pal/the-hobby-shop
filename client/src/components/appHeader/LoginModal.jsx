import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextInput from "../shared/form/textInput/TextInput";

function LoginModal({ loginModalOpen, closeLogin }) {
  const initialValues = { email: "", password: "" };
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid Email!").required("Email is required!"),
    password: Yup.string().required("Password is required."),
  });

  return (
    <Modal isOpen={loginModalOpen} onClose={closeLogin} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader borderBottomWidth={"1px"}>
          <Heading size={"md"}>Login!</Heading>
          <ModalCloseButton />
        </ModalHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) =>
            console.log(
              "Login is not yet implemented. You have entered the following data:\n",
              values
            )
          }>
          {(form) => (
            <Form>
              <ModalBody>
                <TextInput
                  name="email"
                  type="text"
                  size="small"
                  p={1}
                  borderRadius={"md"}
                  placeholder="Email"
                  autoFocus
                />
                <TextInput
                  name="password"
                  type="password"
                  size="small"
                  p={1}
                  borderRadius={"md"}
                  placeholder="Password"
                />
              </ModalBody>
              <ModalFooter borderTopWidth={"1px"}>
                <Button
                  colorScheme={"blue"}
                  size={"sm"}
                  ml={2}
                  variant={"ghost"}
                  onClick={closeLogin}>
                  Cancel
                </Button>
                <Button
                  colorScheme={"blue"}
                  size={"sm"}
                  ml={2}
                  variant={"solid"}
                  type="submit"
                  isDisabled={!form.isValid}>
                  Login
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
