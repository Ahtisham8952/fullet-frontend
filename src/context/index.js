import React, { createContext, useCallback, useState } from "react";

export const FuletContext = createContext();

const AppContext = ({ children }) => {
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [navLinks, setNavLinks] = useState([
    {
      label: "Home",
      href: "/",
      isDisabled: false,
      Border: "2px solid rgba(52, 97, 255, 1)",
    },
    { label: "Feed", href: "/feedscreen", isDisabled: false },
    { label: "Profile", href: "/profile", isDisabled: false },
    { label: "Settings", href: "/settings", isDisabled: false },
  ]);

  const expandSearchBar = useCallback(() => {
    setIsSearchBarExpanded((prev) => !prev);
    if (isSearchBarExpanded) {
      setNavLinks([
        {
          label: "Home",
          href: "/",
          isDisabled: false,
          Border: "2px solid rgba(52, 97, 255, 1)",
        },
        { label: "Top accounts", href: "/about", isDisabled: false },
        { label: "Blog", href: "/blog", isDisabled: false },
        { label: "Contact", href: "/contact", isDisabled: false },
      ]);
    } else {
      setNavLinks([
        {
          label: "Home",
          href: "/",
          isDisabled: false,
          Border: "2px solid rgba(52, 97, 255, 1)",
        },
      ]);
    }
  }, [navLinks, isSearchBarExpanded]);

  return (
    <FuletContext.Provider
      value={{ isSearchBarExpanded, expandSearchBar, navLinks }}
    >
      {children}
    </FuletContext.Provider>
  );
};

export default AppContext;
