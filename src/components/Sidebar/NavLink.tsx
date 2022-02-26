import { Text, Icon, Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends ChakraLinkProps {
  title: string;
  icon?: IconType;
}

export function NavLink({ title, icon, ...props }: NavLinkProps) {
  return (
    <Link display="flex" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
  )
}