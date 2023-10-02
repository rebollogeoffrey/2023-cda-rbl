import { createContext } from "react";

type NavbarContent = {
  modalMenu: boolean;
  setModalMenu: (c: boolean) => void;
};

const NavBarContext = createContext<NavbarContent>({
  modalMenu: false,
  setModalMenu: () => {},
});

export default NavBarContext;
