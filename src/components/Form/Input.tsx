import { Input as ChackraInput, InputProps as ChackraInputProps, FormLabel, FormControl } from "@chakra-ui/react"

interface InputProps extends ChackraInputProps {
  label?: string
  name: string
}

export function Input({ label, name, ...rest}: InputProps) {
  return (
    <FormControl>
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
        {...rest}
      />
    </FormControl>
  )
}