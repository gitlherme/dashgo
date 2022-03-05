import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Guilherme Vieira
          </Text>
          <Text color="gray.300" fontSize="small">
            glvs011@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Guilherme Vieira" src="https://github.com/gitlherme.png">

      </Avatar>
    </Flex>
  )
}