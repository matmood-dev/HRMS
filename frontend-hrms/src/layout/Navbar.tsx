// src/layout/Navbar.tsx
import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.header`
  height: 60px;
  background-color: var(--color-bg);
  border-bottom: 1px solid #e0e0e0;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  color: var(--color-text);
  font-weight: 700;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  color: var(--color-muted);
  font-weight: 500;
  font-size: 0.95rem;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background-color: var(--color-primary);
  border-radius: 50%;
  color: var(--color-bg);
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar: React.FC = () => {
  return (
    <NavBarContainer>
      <Title>Dashboard</Title>
      <RightContent>
        <UserName>Admin</UserName>
        <Avatar>A</Avatar>
      </RightContent>
    </NavBarContainer>
  );
};

export default Navbar;
