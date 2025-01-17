import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{
        aboutSectionRef,
        heroSectionRef,
        projectsSectionRef,
        contactSectionRef,
        skillsSectionRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
