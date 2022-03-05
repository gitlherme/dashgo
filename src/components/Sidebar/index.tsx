import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside"
      w="64"
      mr="8"
    >
      <Stack
        spacing="12"
        align="flex-start"
      >
        <NavSection title="Geral">
          <NavLink title="Dashboard" href="/dashboard" icon={RiDashboardLine} />
          <NavLink title="Usuários" href="/users" icon={RiContactsLine} />          
        </NavSection>

        <NavSection title="Automação">
          <NavLink title="Forms" href="/forms" icon={RiInputMethodLine} />
          <NavLink title="Automações" href="/automation" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>

    </Box>
  )
}