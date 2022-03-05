import { Text, Icon, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavLinkProps extends ChakraLinkProps {
  title: string;
  icon?: IconType;
  href: string;
}

export function NavLink({ title, icon, href, ...props }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </Link>
  )
}