import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { MdWarning } from "react-icons/md";

function TextInput(props) {
  const { name, label, ...rest } = props;
  return (
    <Field name={name}>
      {({ form, field }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} my={2}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <Input {...rest} {...field} />
          <FormErrorMessage>
            <MdWarning style={{ marginRight: "0.5rem" }} /> {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default TextInput;
