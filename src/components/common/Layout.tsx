import { useState, ReactNode } from "react";
import { Container } from "@mui/material";
import Navbar from "src/components/common/Navbar";
import Sidebar from "src/components/common/Sidebar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => setDrawerOpen(!isDrawerOpen);

  return (
    <>
      <Navbar toggleOpen={toggleDrawerOpen} />
      <Sidebar isOpen={isDrawerOpen} toggleOpen={toggleDrawerOpen} />
      <Container component="main">{children}</Container>
    </>
  );
};

export default Layout;
