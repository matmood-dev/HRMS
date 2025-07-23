// src/layout/Layout.tsx
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { HomeOutlined, TeamOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Humx HRMS</SidebarTitle>

        <StyledNavLink to="/">
          <HomeOutlined />
          {t("layout.dashboard")}
        </StyledNavLink>

        <StyledNavLink to="/employees">
          <TeamOutlined />
          {t("employees.title")}
        </StyledNavLink>
      </Sidebar>

      <MainWrapper>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </MainWrapper>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
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

const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  color: var(--color-muted);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;

  & svg {
    font-size: 18px;
  }

  &:hover {
    background-color: #f5f5f5;
    color: var(--color-text);
  }

  &.active {
    background-color: #f0f0f0;
    color: var(--color-text);
    font-weight: 600;
  }
`;

export default Layout;
