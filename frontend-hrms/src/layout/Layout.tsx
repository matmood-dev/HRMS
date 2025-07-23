// src/layout/Layout.tsx
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const Sidebar = styled.aside`
  width: 240px;
  background-color: var(--color-bg); /* white */
  color: var(--color-text);          /* black */
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.03);
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 800;
  color: var(--color-text);
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-muted);
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f5f5f5;
    color: var(--color-text);
  }
`;


const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Humx HRMS</SidebarTitle>
        <NavItem>🏠 Dashboard</NavItem>
      </Sidebar>

      <MainWrapper>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </MainWrapper>
    </Container>
  );
};

export default Layout;
