// src/pages/HomePage.tsx
import React from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  font-weight: 800;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-bg);
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Title>Welcome to Humx HRMS</Title>
        <Subtitle>Manage your employees, payroll, leave, and more.</Subtitle>
        <Button onClick={() => alert("Start Managing")}>Get Started</Button>
      </Container>
    </Layout>
  );
};

export default HomePage;
