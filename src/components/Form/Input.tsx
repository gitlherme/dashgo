import { FormControl, FormErrorMessage, FormLabel, Input as ChackraInput, InputProps as ChackraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChackraInputProps {
  label?: string;
  name: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement ,InputProps> = ({ label, name, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!! label && <FormLabel htmlFor={name} color="gray.500" fontSize="sm">{label}</FormLabel>}
      <ChackraInput 
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        name={name}
        ref={ref}
        {...rest}
      />
      { !!error && 
        <FormErrorMessage>
          { error.message }
        </FormErrorMessage>
      }
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)