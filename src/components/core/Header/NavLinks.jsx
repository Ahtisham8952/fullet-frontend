import { Stack, Button, Link, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { FuletContext } from "../../../context";

export function NavLinks({ links }) {
  const { isSearchBarExpanded, navLinks } = useContext(FuletContext);

  return (
    <Stack direction="row" spacing={"56px"} mr="43px">
      {navLinks.map((link) => (
        <Button
          key={link}
          colorScheme={"transparent"}
          pb="4px"
          isDisabled={link.isDisabled}
          minWidth={"3px"}
          bg="transparent"
          px="0px"
          borderRadius={"0px"}
          borderBottom={link.Border}
        >
          <Link
            href={link.href}
            color="white"
            _hover={{ textDecoration: "none" }}
            fontSize="16px"
            fontWeight="600"
            lineHeight={"24px"}
          >
            {link.label}
          </Link>
        </Button>
      ))}
    </Stack>
  );
}
