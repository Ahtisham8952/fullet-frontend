// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/josefin-sans";
import "@fontsource/rajdhani";
import Footer from "../src/components/core/FooterSection/Footer";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "../src/components/core/LayoutWrapper/LayoutWrapper";
import { mynewtheme } from "../src/theme";
import AppContext from "../src/context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";

<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;
function Marketplace({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <AppContext>
        <GoogleOAuthProvider clientId="817375578621-b8jmvt2kv8egdsjvf8q8brk1prj8rvoi.apps.googleusercontent.com">
          <ToastContainer />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </GoogleOAuthProvider>
      </AppContext>
    </ChakraProvider>
  );
}

export default Marketplace;
