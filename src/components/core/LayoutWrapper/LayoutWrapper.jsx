import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";
import Footer from "../FooterSection/Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <Box bg="#04031A" position={"relative"} zIndex="999" overflow={"hidden"}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
