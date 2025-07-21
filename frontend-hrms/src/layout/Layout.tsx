// src/layout/Layout.tsx
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 240px;
  background-color: #1f2937;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const NavItem = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #374151;
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
  background-color: #f5f7fa;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Humx HRMS</SidebarTitle>
        <NavItem>🏠 Dashboard</NavItem>
        <NavItem>👤 Employees</NavItem>
        <NavItem>💰 Payroll</NavItem>
        <NavItem>📅 Attendance</NavItem>
        <NavItem>🏖️ Leave</NavItem>
      </Sidebar>

      <MainWrapper>
        <Navbar />
        <Main>{children}</Main>
      </MainWrapper>
    </Container>
  );
};

export default Layout;
