import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as="header"
      maxW={1480}
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
       <IconButton 
          aria-label='Open menu' 
          icon={<Icon as={RiMenuLine} />} 
          onClick={onOpen} 
          fontSize="24"
          variant="unstyled" mr="2"
       />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}