import { Button, Flex, Stack } from "@chakra-ui/react"
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from "../components/Form/Input"

type SignInFormData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }
  
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex 
        as="form" 
        w="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        direction="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" error={errors.email} label="E-mail" {...register("email")}/>
          <Input name="password" type="password" error={errors.password} label="Senha" {...register("password")}/>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
